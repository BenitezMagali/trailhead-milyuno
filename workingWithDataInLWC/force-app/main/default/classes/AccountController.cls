public with sharing class AccountController {
    @AuraEnabled(cacheable=true) //para que los resultados sean cacheados
    public static List<Account> getAccounts(){ //get accounts para leer la operación y retrieve las cuentas existentes
        return [ SELECT Name, AnnualRevenue, Industry
            FROM Account 
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
    }
}
