import _sodium from "libsodium-wrappers";
await _sodium.ready;
const sodium = _sodium;

const key = "2Sg8iYjAxxmI2LvUXpJjkYrMxURPc8r+dB7TJyvv123";

async function encrypt(secret) {
  try {
    // Wait for libsodium to be ready
    await sodium.ready;

    // Convert the secret and key to a Uint8Array
    const binkey = sodium.from_base64(key, sodium.base64_variants.ORIGINAL);
    const binsec = sodium.from_string(secret);

    // Encrypt the secret using libsodium
    const encBytes = sodium.crypto_box_seal(binsec, binkey);

    // Convert the encrypted Uint8Array to Base64
    const output = sodium.to_base64(encBytes, sodium.base64_variants.ORIGINAL);

    // Print the output
    console.log(output);
    return output;
  } catch (error) {
    console.error("Error encrypting secret:", error);
  }
}

encrypt("jehova");
