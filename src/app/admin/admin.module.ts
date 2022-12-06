import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {TabViewModule} from "primeng/tabview";
import { TableModule } from 'primeng/table';
import { AdminComponent } from './admin.component';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import {ReactiveFormsModule} from "@angular/forms";
import {SidebarModule} from "primeng/sidebar";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {PaginatorModule} from "primeng/paginator";
import { CalendarModule, CalendarWeekModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import {DividerModule} from "primeng/divider";
import {ListboxModule} from "primeng/listbox";
import { CalendarModule as primeCalendarModule } from 'primeng/calendar';
import {FieldsetModule} from "primeng/fieldset";
import {InputTextareaModule} from "primeng/inputtextarea";
import {ChartModule} from "primeng/chart";
import {SelectButtonModule} from "primeng/selectbutton";
import {NgApexchartsModule} from "ng-apexcharts";
import {ColorPickerModule} from "primeng/colorpicker";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {MultiSelectModule} from "primeng/multiselect";
import {ToggleButtonModule} from "primeng/togglebutton";
import {AvatarModule} from "primeng/avatar";
import {ImageModule} from "primeng/image";
import {FileUploadModule} from "primeng/fileupload";
import {EditorModule} from "primeng/editor";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {MenubarModule} from "primeng/menubar";
import {CarouselModule} from "primeng/carousel";
import {TimelineModule} from "primeng/timeline";
import {MenuModule} from "primeng/menu";
import {PdfViewerModule} from "ng2-pdf-viewer";
import {GoogleMapsModule} from "@angular/google-maps";
import {GMapModule} from "primeng/gmap";
import {ToastModule} from "primeng/toast";
import {StyleClassModule} from "primeng/styleclass";
import {CardModule} from "primeng/card";
import {InputSwitchModule} from "primeng/inputswitch";
import {FinanceRequestOverviewComponent} from "./finance-request-overview/finance-request-overview.component";
import {ConfirmationService} from "primeng/api";
import { FinanceSettingsComponent } from './finance-settings/finance-settings.component';
import { FinanceRequestViewerComponent } from './finance-request-viewer/finance-request-viewer.component';
import { FinanceRequestCalculatorComponent } from './finance-request-calculator/finance-request-calculator.component';
import { FinanceRequestQuotationComponent } from './finance-request-quotation/finance-request-quotation.component';
import {SliderModule} from "primeng/slider";


@NgModule({
  declarations: [
    AdminComponent,
    FinanceRequestOverviewComponent,
    FinanceSettingsComponent,
    FinanceRequestViewerComponent,
    FinanceRequestCalculatorComponent,
    FinanceRequestQuotationComponent
  ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        TableModule,
        TooltipModule,
        DialogModule,
        InputTextModule,
        DropdownModule,
        ReactiveFormsModule,
        SidebarModule,
        ConfirmDialogModule,
        PaginatorModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
        CalendarWeekModule,
        DividerModule,
        ListboxModule,
        primeCalendarModule,
        FieldsetModule,
        InputTextareaModule,
        ChartModule,
        SelectButtonModule,
        NgApexchartsModule,
        ColorPickerModule,
        OverlayPanelModule,
        MultiSelectModule,
        ToggleButtonModule,
        AvatarModule,
        ImageModule,
        FileUploadModule,
        EditorModule,
        FlexModule,
        FlexLayoutModule,
        MenubarModule,
        CarouselModule,
        TimelineModule,
        TabViewModule,
        MenuModule,
        GMapModule,
        GoogleMapsModule,
        PdfViewerModule,
        ToastModule,
        StyleClassModule,
        CardModule,
        InputSwitchModule,
        SliderModule,
    ],
  providers: [ConfirmationService],
})
export class AdminModule { }
