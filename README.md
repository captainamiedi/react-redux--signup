# OneKioskAfrica
# this is the structure I am following!

---  src
     --- Component
     --- Assets
         --- css
         --- img
         --- fonts
         --- js
         --- scss
     --- Redux
         --- Actions
               --- profile-management-action.js   // "get_stores"
               --- product-management-action.js
               --- onboarding-management-action.js
         --- reducers
               --- profile-management-reducer.js
               --- product-management-reducer.js
               --- onboarding-management-reducer.js
         --- constants 
                --- profile-management-constant.js  --  export {
                    "login": "loging in user",
                    "logAuser": "loging in user",
                }
                --- product-management-constant.js 
                                export {
                                    "login": "loging in user",
                                    "login": "loging in user",
                                    "login": "loging in user",
                                    "login": "loging in user",
                                    "login": "loging in user"
                                }
                --- onboarding-management-constant.js
                         export {
                                    "Onboarding": "get a in user",
                                    "Onboarding": "check a in user",
                                }
     --- services 
         --- apiServices  //axios
         --- urls    //// contain url in conston
     --- Shared
    