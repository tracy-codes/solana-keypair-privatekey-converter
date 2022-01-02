const fs = require("fs");
const bs58 = require("bs58");
const { program } = require("commander");

program.version("0.0.1");

program
  .command("convert_to_pkey")
  .option(
    "-k, --keypair <path>",
    "Solana wallet keypair location",
    "--keypair not provided"
  )
  .action((dir, cmd) => {
    const { keypair } = cmd.opts();

    console.log(keypair);
    const text = JSON.parse(fs.readFileSync(keypair, { encoding: "utf8" }));

    const out = bs58.encode(text);

    console.log(`Your keypair file location: ${keypair}`);
    console.log(`Keypair private key to import into Phantom: ${out}`);
  });

program.parse(process.argv);
