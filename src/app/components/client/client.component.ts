import { Component, OnInit } from '@angular/core';
import { AccordionContent } from 'src/app/common/ocean-accordion/ocean-accordion.component';
import { SelectItem } from 'primeng/api';

export interface ClientDetails{
  companyName:string;
  registerCode:string;
  fiscalCode:string;
  telephoneNo:string;
  fax:string;
  headquarter:string;
  bankAccount:string;
  bank:string;
  importantNotes:string;
  website:string;
}

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public newDiscution={
    header:'',
    content:{
      subject:''
    }
  }

  public projectStageState={
    projectStage:'Activ',
    contractNumber:'',
    signingDate:'',
    isAdministrated:false,
    isWorkingAgreement:false,
    signingDateWorkAgreement:'',
    agreementNumber:'',
    agreementPeriod:''
  }

  public clientDetailsState={
    companyName:'Razvan Craciun',
    registerCode:'RRMAEWAWEWA213',
    fiscalCode:'43124313143',
    telephoneNo:'0756321890',
    fax:'0250 234 210',
    headquarter:'Mountain View, CA 92810',
    bankAccount:'SVCPA0000121312',
    bank:'Bank of America',
    importantNotes:'Prioritar',
    website:'www.adobe.com',
  }

  public editModeProjectStage = false;
  public editModeClientDetails = false;
  public timeScales:SelectItem[]=[
    {label: 'weeks' , value: 'weeks'},
    {label: 'months' , value: 'months'},
    {label: 'years' , value: 'years'},
  ];

  public discutionDialogVisible = false;
  public isAcordDeLucru:boolean = true;
  public isAdministrare:boolean = false;
  public selectedItem:SelectItem={label: 'weeks' , value: 'weeks'};
  public contactPersons:AccordionContent[]=[
    {
      header:'John Doe',
      content:{
        functia:"Agent marketing",
        telefon:"21312", 
        telefon_fix:"0262 472 245", 
        email:'ceva@ceva.com'
      }
    },
    {
      header:'Nick Williams',
      content:{
        functia:"Agent marketing",
        telefon:"21312", 
        telefon_fix:"0262 472 245", 
        email:'ceva@ceva.com'
      },
    },
    {
      header:'Joe Wits',
      content:{
        functia:"Agent marketing",
        telefon:"21312", 
        telefon_fix:"0262 472 245", 
        email:'ceva@ceva.com'
      },
    },
    {
      header:'Arnold Van Boeken',
      content:{
        functia:"Agent marketing",
        telefon:"21312", 
        telefon_fix:"0262 472 245", 
        email:'ceva@ceva.com'
      },
    },
    {
      header:'Daniel Nabuk',
      content:{
        functia:"Agent marketing",
        telefon:"21312", 
        telefon_fix:"0262 472 245", 
        email:'ceva@ceva.com'
      },
    },
  ]

  public discutions:AccordionContent[]=[
    {
      header:'Adobe',
      content:{
        Subject:'De stabilit prioritati'
      }
    }
  ]

  public debitors:AccordionContent[]=[
    {
      header:'Cons S.A',
      content:{
        cod_fiscal:'437235',
        valoare_debit:'20.000 lei',
        valoare_comision:'2000 lei'
      }
    },
    {
      header:'Nordin Company',
        content:{
        cod_fiscal:'437235',
        valoare_debit:'20.000 lei',
        valoare_comision:'2000 lei'
      }
    },
    {
      header:'Dormamu',
        content:{
        cod_fiscal:'437235',
        valoare_debit:'20.000 lei',
        valoare_comision:'2000 lei'
      }
    },
    {
      header:'Bargain',
        content:{
        cod_fiscal:'437235',
        valoare_debit:'20.000 lei',
        valoare_comision:'2000 lei'
      }
    },
    {
      header:'Swedish IO',
        content:{
        cod_fiscal:'437235',
        valoare_debit:'20.000 lei',
        valoare_comision:'2000 lei'
      }
    },
  ]

  selectedState: any = null;

  states: any[] = [
      {name: 'Arizona', code: 'Arizona'},
      {name: 'California', value: 'California'},
      {name: 'Florida', code: 'Florida'},
      {name: 'Ohio', code: 'Ohio'},
      {name: 'Washington', code: 'Washington'}
  ];

  constructor() { }

  ngOnInit(): void {

  }

  public onEditClientDetails(){
    console.warn(this.clientDetailsState);
    this.editModeClientDetails = true;
  }

  public onSaveClientDetails(){
    this.editModeClientDetails = false;
  }

  public onCancelEditClientDetails(){  
    this.editModeClientDetails = false;
  }


  public onSelectTimeRange(event){
    console.error('Client Component',event);
  }
  public onEditProjectStageStatus(){
    console.error(this.projectStageState);
    this.editModeProjectStage = true;
  }

  public onSaveProjectStageStatus(){
    this.editModeProjectStage = false;
  }

  public onCancelNewProjectState(){
    this.editModeProjectStage = false;
  }


  public onAddContact(){
    this.contactPersons.push( {header:'John Doe',content:{functia:"Agent marketing",telefon:"21312", telefon_fix:"0262 472 245", email:'ceva@ceva.com'}});
  }

  public onAddDiscution(){
    this.discutionDialogVisible = true;
  }

  onSaveDiscution(){
    // console.warn(this.newDiscution);
    this.discutions.push(JSON.parse(JSON.stringify(this.newDiscution)));
    this.newDiscution.header='';
    this.newDiscution.content.subject=''
    this.discutionDialogVisible = false;
  }
  public onAddDebitorStage(){

  }

}
