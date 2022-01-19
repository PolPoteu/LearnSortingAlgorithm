import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BubblesortComponent } from './bubblesort/bubblesort.component';
import { InsertionsortComponent } from './insertionsort/insertionsort.component';
import { MergesortComponent } from './mergesort/mergesort.component';
import { SelectionsortComponent } from './selectionsort/selectionsort.component';
import { HeapsortComponent } from './heapsort/heapsort.component';
import { QuicksortComponent } from './quicksort/quicksort.component';
import { RadixsortComponent } from './radixsort/radixsort.component';
import { CountingsortComponent } from './countingsort/countingsort.component';
import { BucketsortComponent } from './bucketsort/bucketsort.component';
import { ShellsortComponent } from './shellsort/shellsort.component';
import { CombsortComponent } from './combsort/combsort.component';
import { PigeonholesortComponent } from './pigeonholesort/pigeonholesort.component';
import { CyclesortComponent } from './cyclesort/cyclesort.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BubblesortComponent,
    InsertionsortComponent,
    MergesortComponent,
    SelectionsortComponent,
    HeapsortComponent,
    QuicksortComponent,
    RadixsortComponent,
    CountingsortComponent,
    BucketsortComponent,
    ShellsortComponent,
    CombsortComponent,
    PigeonholesortComponent,
    CyclesortComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
