module LiquidityPool {

    use 0x1::AptosCoin;
    use 0x1::Coin;

    struct Pool has store {
        token_a_balance: u64,
        token_b_balance: u64,
        total_liquidity: u64,
    }

    
    public fun initialize_pool(account: &signer, token_a_amount: u64, token_b_amount: u64) {
        let pool = Pool {
            token_a_balance: token_a_amount,
            token_b_balance: token_b_amount,
            total_liquidity: token_a_amount + token_b_amount,  
        };
        move_to(account, pool);
    }

    
    public fun add_liquidity(account: &signer, token_a_amount: u64, token_b_amount: u64) {
        let pool = borrow_global_mut<Pool>(signer::address_of(account));
        pool.token_a_balance = pool.token_a_balance + token_a_amount;
        pool.token_b_balance = pool.token_b_balance + token_b_amount;
        pool.total_liquidity = pool.total_liquidity + token_a_amount + token_b_amount;
    }

    
    public fun remove_liquidity(account: &signer, liquidity_amount: u64) {
        let pool = borrow_global_mut<Pool>(signer::address_of(account));
        
        let removed_token_a = (pool.token_a_balance * liquidity_amount) / pool.total_liquidity;
        let removed_token_b = (pool.token_b_balance * liquidity_amount) / pool.total_liquidity;

        pool.token_a_balance = pool.token_a_balance - removed_token_a;
        pool.token_b_balance = pool.token_b_balance - removed_token_b;
        pool.total_liquidity = pool.total_liquidity - liquidity_amount;

        
        AptosCoin::transfer(account, removed_token_a);
        AptosCoin::transfer(account, removed_token_b);
    }

    
    public fun swap(account: &signer, token_a_amount: u64, token_b_amount: u64) {
        let pool = borrow_global_mut<Pool>(signer::address_of(account));
        
        
        assert!(pool.token_a_balance >= token_a_amount, 1);  
        assert!(pool.token_b_balance >= token_b_amount, 2);  

        pool.token_a_balance = pool.token_a_balance - token_a_amount;
        pool.token_b_balance = pool.token_b_balance + token_b_amount;
    }

    
    public fun get_token_a_balance(account: &signer): u64 {
        let pool = borrow_global<Pool>(signer::address_of(account));
        pool.token_a_balance
    }

    
    public fun get_token_b_balance(account: &signer): u64 {
        let pool = borrow_global<Pool>(signer::address_of(account));
        pool.token_b_balance
    }

    
    public fun get_total_liquidity(account: &signer): u64 {
        let pool = borrow_global<Pool>(signer::address_of(account));
        pool.total_liquidity
    }
}
