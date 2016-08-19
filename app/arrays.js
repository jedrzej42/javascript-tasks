(function ()
{
    'use strict';

    window.arraysAnswers = {
        indexOf: function (arr, item)
        {
            for(var i =0; i<arr.length; i++){
                if(arr[i] === item){
                    return i;
                }
            }
            return -1;
        },

        sum: function (arr)
        {
            var suma = 0;
            for(var i =0; i<arr.length; i++){
                suma += arr[i];
            }
            return suma;
        },

        copy: function (arr)
        {
            var newarr = [];
            for(var i =0; i<arr.length; i++){
                newarr.push(arr[i]);
            }
            return newarr;
        },

        remove: function (arr, item)
        {
            for(var i =0; i<arr.length; i++){
                if(arr[i] === item){
                    arr.splice(i,1);
                    i--;
                }
            }
            return arr;
        },

        removeFromCopy: function (arr, item)
        {
            var newarr = [];
            for(var i =0; i<arr.length; i++){
                if(arr[i] !== item){
                    newarr.push(arr[i]);
                }
            }
            return newarr;
        },

        append: function (arr, item)
        {
            arr.push(item);
        },

        appendToCopy: function (arr, item)
        {
            var newarray = [];
            for(var i =0; i<arr.length; i++){
                newarray.push(arr[i]);
            }
            newarray.push(item);
            return newarray;
        },

        truncate: function (arr)
        {
            return arr.pop();
        },

        prepend: function (arr, item)
        {
            arr.splice(0,0,item);
        },

        curtail: function (arr)
        {
            var item = arr[0];
            arr.splice(0,1);
            return item;
        },

        concat: function (arr1, arr2)
        {
            var newarray = [];
            for(var i = 0; i<arr1.length; i++){
                newarray.push(arr1[i]);
            }
            for(var i = 0; i<arr2.length; i++){
                newarray.push(arr2[i]);
            }
            return newarray;
        },

        insert: function (arr, index, item)
        {
            arr.splice(index,0,item);
            return arr;
        },

        count: function (arr, item)
        {
            var sum =0;
            for(var i = 0; i<arr.length; i++){
                if(arr[i] === item){
                    sum++;
                }
            }
            return sum;
        },

        duplicates: function (arr)
        {
            var duparr = [];
            for(var i = 0; i<arr.length; i++){
                for(var j = arr.length; j>i; j--){
                    if(arr[i] === arr[j]){
                        var t = true;
                        for(var k = 0; k<duparr.length;k++){
                            if(arr[i] === duparr[k]){
                                t = false;
                            }
                        }
                        if(t){
                            duparr.push(arr[i]);
                        }
                    }
                }
            }
            return duparr;
        },

        square: function (arr)
        {
            for(var i = 0; i<arr.length; i++){
                arr[i] = arr[i]*arr[i];
            }
            return arr;
        },

        findAllOccurrences: function (arr, target)
        {
            var newarr = [];
            for(var i = 0; i<arr.length; i++){
                if(arr[i] === target){
                    newarr.push(i);
                }
            }
            return newarr;
        }

    };
})();
