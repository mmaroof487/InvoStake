#include "seal/seal.h"
#include <iostream>

int main() {
    
    seal::EncryptionParameters params(seal::scheme_type::bfv);
    params.set_poly_modulus_degree(8192);
    params.set_coeff_modulus(seal::CoeffModulus::BFVDefault(8192));
    params.set_plain_modulus(1024);

    
    auto context = seal::SEALContext::Create(params);
    seal::KeyGenerator keygen(context);
    auto public_key = keygen.public_key();
    auto secret_key = keygen.secret_key();

    seal::Encryptor encryptor(context, public_key);
    seal::Decryptor decryptor(context, secret_key);
    seal::Evaluator evaluator(context);

    
    seal::Plaintext plain1("5"), plain2("7");
    seal::Ciphertext encrypted1, encrypted2;
    encryptor.encrypt(plain1, encrypted1);
    encryptor.encrypt(plain2, encrypted2);

    
    seal::Ciphertext encrypted_result;
    evaluator.add(encrypted1, encrypted2, encrypted_result);

    
    seal::Plaintext result;
    decryptor.decrypt(encrypted_result, result);

    std::cout << "Decrypted result: " << result.to_string() << std::endl;
    return 0;
}