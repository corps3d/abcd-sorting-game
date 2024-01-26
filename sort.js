$(document).ready(function() {
    // Hide all blocks
    $(".block").hide();

    $("#activateBlocks").on("click", function() {
        $(".block").removeClass("active");

        var selectedIndexes = [];
        while (selectedIndexes.length < 3) {
            var randomIndex = getRandomIndex();
            console.log(randomIndex);

            // Ensure the selected index is unique
            if (!selectedIndexes.includes(randomIndex)) {
                selectedIndexes.push(randomIndex);
                $(".block").eq(randomIndex).addClass("active");
            }
        }

        // Shuffle the array
        selectedIndexes = shuffle(selectedIndexes);

        selectedIndexes.forEach(function(index) {
            $(".block.active").eq(index).show();
        });
    });

    function getRandomIndex() {
        return Math.floor(Math.random() * 26); 
    }

    // Function to shuffle
    function shuffle(array) {
        var m = array.length, t, i;
      
        // While there remain elements to shuffle…
        while (m) {
      
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
      
          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }
        console.log(array);
        return array;
    }
});
