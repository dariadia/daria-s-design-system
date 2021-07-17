// First run
// npm install --save-dev @svgr/core @svgr/plugin-svgo @svgr/plugin-prettier glob

const fs = require('fs');
const path = require('path');
const glob = require('glob');
const svgr = require('@svgr/core').default;

const ICONS_SOURCE_DIR = 'assets/icons';
const COMPONENTS_DIR = 'result';

// Template to generate named exports instead of default ones
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
      // 1. Clean SVG files using SVGO
      // 2. Generate JSX
      // 3. Format the result using Prettier
      plugins: [
        '@svgr/plugin-svgo',
        '@svgr/plugin-jsx',
        '@svgr/plugin-prettier'
      ],
      // Replace hardcoded colours with `currentColor`
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
