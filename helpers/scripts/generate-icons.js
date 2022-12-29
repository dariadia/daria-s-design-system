// Based on https://blog.sapegin.me/til/react/generating-typescript-react-components-from-svg-icons-using-svgr/
// First run
// npm install --save-dev @svgr/core @svgr/plugin-svgo @svgr/plugin-prettier glob

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const svgr = require('@svgr/core').default;

const ICONS_SOURCE_DIR = 'assets/icons';
const COMPONENTS_DIR = 'result';

const iconComponentTemplate = (
  { template },
  opts,
  { imports, componentName, jsx }
) =>
  template.smart({ plugins: ['typescript'] }).ast`
        ${imports}
        ${'\n'}
        export const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => ${jsx};
    `;

const icons = glob.sync(`${ICONS_SOURCE_DIR}/**.svg`);

for (const icon of icons) {
  const svg = fs.readFileSync(icon, 'utf8');
  const componentName = path.parse(icon).name;
  const componentCode = svgr.sync(
    svg,
    {
      template: iconComponentTemplate,
      plugins: [
        '@svgr/plugin-svgo',
        '@svgr/plugin-jsx',
        '@svgr/plugin-prettier'
      ],
      svgoConfig: {
        plugins: [{ convertColors: { currentColor: true } }]
      },
    },
    { componentName }
  );
  fs.writeFileSync(
    `${COMPONENTS_DIR}/${componentName}.tsx`,
    componentCode
  );
}
