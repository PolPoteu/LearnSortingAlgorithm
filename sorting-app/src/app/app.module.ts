import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

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
import { MatButtonModule } from '@angular/material/button';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavigationComponent } from './navigation/navigation.component';

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
    CyclesortComponent,
    PageNotFoundComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forRoot([
      { path: 'bubble-sort', component: BubblesortComponent },
      { path: 'insertion-sort', component: InsertionsortComponent },
      { path: 'merge-sort', component: MergesortComponent },
      { path: 'quick-sort', component: QuicksortComponent },
      { path: '', redirectTo: '/bubble-sort', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
