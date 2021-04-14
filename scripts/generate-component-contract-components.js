/* --- Global Modules --- */
const fs = require("fs");
const {
  component_return_bignumber,
  component_return_string,
  component_return_address,
  test,
  barrel,
} = require("../../templates/automation/basic/component_templates.js");

// const { hook } = require("../../templates/automation/basic/hooks_templates.js");
const {
  hook,
  hookExport,
} = require("../../templates/automation/basic/hook-react-query.js");

/* --- Local Modules --- */
const { capitalize } = require("./automation-helpers");

/* --- CLI Arguments --- */
/* --------------------- */
const [contract] = process.argv.slice(2);
if (!contract) throw new Error("Must provide a Contract ABI.");

// grab component name from terminal argument
const [folder] = process.argv.slice(3);
if (!folder) throw new Error("Must provide a destination folder.");

const [address] = process.argv.slice(3);
if (!address) throw new Error("Must provide a contract address");

/* --- Smart Contract --- */
/* ---------------------- */
const Contract = require(`../contracts/${contract}`);

/* ---  Directories  --- */
/* --------------------- */
const rootDir = `./src/components/${folder}/`;
if (!fs.existsSync(rootDir)) fs.mkdirSync(rootDir);

const hookParentDir = `./src/hooks/${folder}/`;
if (!fs.existsSync(hookParentDir)) fs.mkdirSync(hookParentDir);

/* --- Error Handling --- */
/* ---------------------- */
function writeFileErrorHandler(err) {
  if (err) throw err;
}

/* ---   Components  --- */
/* --------------------- */
Contract.forEach((contractElement) => {
  if (
    contractElement.stateMutability == "view" ||
    contractElement.stateMutability == "pure"
  ) {
    const COMPONENT_NAME = `${contract}${capitalize(contractElement.name)}`;
    const CONTRACT_COMPONENT_NAME = `${contract}`;
    const CONTRACT_METHOD = contractElement.name;
    const CONTRACT_METHOD_OUTPUT = contractElement.outputs[0];

    // Create Component Directory
    const dir = `./src/components/${folder}/${COMPONENT_NAME}/`;
    const hookDir = `./src/hooks/${folder}/use${COMPONENT_NAME}`;

    /* --- Error Handling --- */
    // throw an error if the file already exists
    if (fs.existsSync(dir)) {
      console.log("Component Exists");
      // throw new Error("A component with that name already exists.");
    } else {
      if (!fs.existsSync(dir)) fs.mkdirSync(dir);

      /* --- Create Components --- */

      switch (CONTRACT_METHOD_OUTPUT.type) {
        case "uint256":
          console.log(
            CONTRACT_METHOD,
            CONTRACT_METHOD_OUTPUT,
            "uint256",
            "METHOD_OUTPUT"
          );
          // component-uint256.tsx
          fs.writeFile(
            `${dir}/${COMPONENT_NAME}.tsx`,
            component_return_bignumber(COMPONENT_NAME, CONTRACT_METHOD, folder),
            writeFileErrorHandler
          );
          break;
        case "string":
          // component-string.tsx
          fs.writeFile(
            `${dir}/${COMPONENT_NAME}.tsx`,
            component_return_string(COMPONENT_NAME, CONTRACT_METHOD, folder),
            writeFileErrorHandler
          );
          break;
        case "address":
          // component-address.tsx
          fs.writeFile(
            `${dir}/${COMPONENT_NAME}.tsx`,
            component_return_address(COMPONENT_NAME, CONTRACT_METHOD, folder),
            writeFileErrorHandler
          );
          break;

        default:
          break;
      }

      // test.tsx
      fs.writeFile(
        `${dir}/${COMPONENT_NAME}.test.tsx`,
        test(COMPONENT_NAME),
        writeFileErrorHandler
      );

      // index.tsx
      fs.writeFile(
        `${dir}/index.ts`,
        barrel(COMPONENT_NAME),
        writeFileErrorHandler
      );
    }

    if (fs.existsSync(hookDir)) {
      // throw new Error("A component with that name already exists.");
    } else {
      if (!fs.existsSync(hookDir)) fs.mkdirSync(hookDir);
      fs.writeFile(
        `${hookDir}/use${COMPONENT_NAME}.tsx`,
        hook(COMPONENT_NAME, contract, CONTRACT_METHOD),
        writeFileErrorHandler
      );
      fs.writeFile(
        `${hookDir}/index.ts`,
        hookExport(COMPONENT_NAME, contract, CONTRACT_METHOD, address),
        writeFileErrorHandler
      );
    }
  }
});

////////////////
/// Optional ///
////////////////

// insert new component into 'components/index.ts file
// fs.readFile("./src/components/index.ts", "utf8", function (err, data) {
//   if (err) throw err;

//   // grab all components and combine them with new component
//   const currentComponents = data.match(/(?<=import )(.*?)(?= from)/g);
//   const newComponents = [name, ...currentComponents].sort();

//   // create the import and export statements
//   const importStatements = newComponents
//     .map((importName) => `import ${importName} from './${importName}';\n`)
//     .join("");
//   const exportStatements = `export {\n${newComponents
//     .map((component) => `  ${component},\n`)
//     .join("")}};\n`;

//   const fileContent = `${importStatements}\n${exportStatements}`;

//   fs.writeFile(`./src/components/index.ts`, fileContent, writeFileErrorHandler);
// });
