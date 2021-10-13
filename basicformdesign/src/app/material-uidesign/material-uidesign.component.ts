import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {LoanType} from '../LoanType';
import {VehicleType} from "../VehicleType";
import {VehicleCondition} from '../VehicleCondition';
import {SourceVehicle} from '../SourceVehicle'
import {FuelIndicator} from "../FuelIndicator";
import {SaleType} from "../SaleType";
import {RegistrationState} from '../RegistrationState'
import {FormBuilder, FormGroup} from "@angular/forms";
import {Subscription} from "rxjs";
import {Service} from "../service";


@Component({
  selector: 'app-material-uidesign',
  templateUrl: './material-uidesign.component.html',
  styleUrls: ['./material-uidesign.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MaterialUIdesignComponent implements OnInit,OnChanges,OnDestroy {


  constructor(private fb : FormBuilder) { }
  profileForm: FormGroup = this.initializeGroup();
  subscription: Subscription = new Subscription();
  serviceobj = new Service()

  ngOnChanges(): void {
    this.profileForm.patchValue(this.profileForm)
  }

  ngOnInit(): void {
    this.setForm();
    this.valueChange();
  }

  initializeGroup(): any {
    return this.fb.group({});
  }

  setForm(){
    this.profileForm = this.fb.group(new Service())
  }
  valueChange(){
    this.profileForm.valueChanges.subscribe(value =>{
      // this.profileForm.patchValue(value)
      this.serviceobj = value
      console.log(this.serviceobj)
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  loantypes: LoanType[] = [
    { value: 'personal-0', viewValue: 'Personal Loans' },
    { value: 'business-1', viewValue: 'Small Business Loans' },
    { value: 'home-2', viewValue: 'Home-Equity Loans' }
  ];
  vehicletypes: VehicleType[] = [
    {value: 'passenger-0', viewValue: 'Passenger'},
    {value: 'van-1', viewValue: 'Van'},
    {value: 'taxi-2', viewValue: 'Taxi'},

  ];
  vehicleconditions: VehicleCondition[] =[
    {value: 'used-0', viewValue: 'Used'},
    {value: 'unused-1', viewValue: 'Unused'},
    {value: 'fair-2', viewValue: 'Fair Condition'},
  ];

  sourceVehicles: SourceVehicle[] =[
    {value: 'car-0', viewValue: 'Car Meet'},
    {value: 'mobile-1', viewValue: 'Mobile Vehicles'},
    {value: 'stationary-2', viewValue: 'Stationary Vehicles'},
  ];
  fuelIndicators: FuelIndicator[] = [
    {value: 'transit-0', viewValue: 'Transit Indicator'},
    {value: 'pressure-1', viewValue: 'Fuel Pressure Gauge'},
    {value: 'signal-2', viewValue: 'Pressure Warning Signal'},
  ]
  saleTypes: SaleType[] = [
    {value: 'sale-0', viewValue: 'Client services'},
    {value: 'inside-1', viewValue: 'Inside Sales'},
    {value: 'outside-2', viewValue: 'Outside Sales'},
  ]
  registrationState: RegistrationState[] = [
    {value: 'uk-0', viewValue: 'United Kingdom'},
    {value: 'pk-1', viewValue: 'Pakistan'},
    {value: 'usa-2', viewValue: 'United State'},
  ]
}
