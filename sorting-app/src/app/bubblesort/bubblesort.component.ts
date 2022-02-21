import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubblesort',
  templateUrl: './bubblesort.component.html',
  styleUrls: ['./bubblesort.component.scss'],
})
export class BubblesortComponent implements OnInit {
  value = `<script>
  function swap(arr, xp, yp)
  {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
  }
  
  function bubbleSort( arr, n)
  {
  var i, j;
  for (i = 0; i < n-1; i++)
  {
    for (j = 0; j < n-i-1; j++)
    {
      if (arr[j] > arr[j+1])
      {
      swap(arr,j,j+1);
      
      }
    }
  
  }
  }
  
  function printArray(arr, size)
  {
    var i;
    for (i=0; i < size; i++)
      document.write(arr[i]+ " ");
    document.write(" ");
  }
  
  var arr = [64, 34, 25, 12, 22, 11, 90];
    var n = 7;
    document.write("UnSorted array: ");
    printArray(arr, n);
  
    bubbleSort(arr, n);
    document.write("Sorted array: ");
    printArray(arr, n);
  </script>
  `;

  ngOnInit(): void {}
}
