import random
import numpy as np

token_basket = {

    "DePIN": ["0x1234...5678", "0x2345...6789"],  
    "RWA": ["0x3456...7890", "0x4567...8901"],  
    "Stablecoins": ["0x5678...9012", "0x6789...0123"],  
}


def recommend_tokens(risk_profile, goal):
    if risk_profile == "high" and goal == "growth":
        
        recommended_tokens = token_basket["DePIN"] + token_basket["RWA"]
    elif risk_profile == "low" and goal == "preservation":
        
        recommended_tokens = token_basket["Stablecoins"]
    else:
        
        recommended_tokens = token_basket["DePIN"] + token_basket["Stablecoins"]
    
    
    return random.choice(recommended_tokens)


user_risk_profile = "high"  
user_investment_goal = "growth"  


recommended_token = recommend_tokens(user_risk_profile, user_investment_goal)
print(f"Recommended Token Contract Address: {recommended_token}")