import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent {
  ran_min = 1;
  ran_max = 25;
  arr_length = 250;
  random_array = [];
  constructor() {}
  public randomIntFromInterval(min: number, max: number, arr_length: number) {
    const random_array = Array.from({ length: arr_length }, () =>
      Math.floor(Math.random() * (max - min + 1) + min)
    );
    return random_array;
  }
  public sortRandomArray(min: number, max: number, arr_length: number) {
    const arr = Array.from({ length: arr_length }, () =>
      Math.floor(Math.random() * (max - min + 1) + min)
    );
    console.log('Random arr:' + arr);
    this.bubbleSort(arr);
    this.mergeSort(arr);
    this.quickSort(arr);
    this.insertionSort(arr);
  }
  // BUBBLE SORT ALGORITHM
  public bubbleSort(arr: number[]) {
    let temp: any;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] < arr[j]) {
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    console.log('Bubble sort' + arr);
    return arr;
  }

  // MERGE SORT ALGORITHM
  public mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }
    let mid = Math.floor(arr.length / 2);
    return this.merge(
      this.mergeSort(arr.slice(0, mid)),
      this.mergeSort(arr.slice(mid))
    );
  }

  public merge(left: number[], right: number[]) {
    let mergeArr = [];
    let i = 0,
      j = 0;

    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        mergeArr.push(left[i++]);
      } else {
        mergeArr.push(right[j++]);
      }
    }
    const returnArr = mergeArr.concat(left.slice(i)).concat(right.slice(j));
    console.log('Merge sort: ' + returnArr);
    return returnArr;
  }

  //QUICK SORT ALGORITHM
  public quickSort(arr: number[]) {
    this.quicksort(arr, 0, arr.length - 1);
  }

  private quicksort(arr: number[], low: number, high: number): number[] {
    if (low < high) {
      const p = this.partition(arr, low, high);

      this.quicksort(arr, low, p - 1);
      this.quicksort(arr, p + 1, high);
    }
  return arr;
  }

  private partition(arr: number[], low: number, high: number): number {
    const pivot = arr[high];
    let i = low;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        this.swap(arr, i, j);
        i++;
      }
    }
    this.swap(arr, i, high);
    return i;
  }

  private swap(arr: number[], a: number, b: number) {
    const tmp = arr[a];
    arr[a] = arr[b];
    arr[b] = tmp;
  }

  //INSERTION SORT ALGORITHM
  public insertionSort(arr: number[]): number[]
   {
       // Iterate the array (0..n)
       for(let i = 0; i < arr.length; i++)
       {
           const tmp = arr[i];
           let j = i - 1;
           // Iterate while J is out of place.
           while(j >= 0 && arr[j] > tmp)
           {
               arr[j + 1] = arr[j];
               j--;
           }
           // Assign the correct location of i where j stops.
           arr[j + 1] = tmp;
       }
       console.log("Insertion Sort: "+arr);
       return arr;
   }
}
