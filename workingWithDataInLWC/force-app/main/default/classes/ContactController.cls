public with sharing class ContactController {
    @AuraEnabled(cacheable=true) //para que los resultados sean cacheados
    public static List<Contact> getContacts(){ 
        return [
            SELECT FirstName, LastName, Email
            FROM Contact 
            WITH SECURITY_ENFORCED
            ORDER BY Name
        ];
    }
}
