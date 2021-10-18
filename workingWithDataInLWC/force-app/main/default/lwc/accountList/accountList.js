import { LightningElement, wire } from 'lwc';
import {reduceErrors} from 'force-app/main/default/lwc/ldsUtils';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
const COLUMNS =[
    { label: 'Account Name', fielName: NAME_FIELD.fieldApiName, type:'text'},
    { label: 'Annual Revenue', fieldName: REVENUE_FIELD.fieldApiName , type: 'currency' },
    { label: 'Industry', fieldName: INDUSTRY_FIELD.fieldApiName, type: 'text'}
];
export default class AccountList extends LightningElement {
   columns = COLUMNS;
   @wire (getAccounts) //Usamos wire para hacer un retrieve 
   accounts; //guardamos el resultado en la propiedad 'accounts', si es exitoso, los resultados son accecibles en accounts.data, si falla pasa un accounts.error
   get errors(){
       return (this.accounts.error) ?
       reduceErrors(this.accounts.error) : [];
   }
}