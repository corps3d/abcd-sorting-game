$(document).ready(function() {
    alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    addRandomBlocks();
    
    function addRandomBlocks() {
        $('.block').remove();
        // Randomly select three block divs
        var selectedIndexes = [];
        while (selectedIndexes.length < 3) {
            var randomIndex = getRandomIndex();

            if (!selectedIndexes.includes(randomIndex)) {
                selectedIndexes.push(randomIndex);
            }
        }

        addActiveBlocks(selectedIndexes);
        initializeSortable(); // Make the active blocks draggable
    }

    // Function to add only the selected and shuffled blocks
    function addActiveBlocks(indexes) {
        for (var i = 0; i < indexes.length; i++) {
            $('#blocksContainer').append('<div class="block active">' + alphabets[indexes[i]] + '</div>')
        }
        $('.active').show();
    }

    function getRandomIndex() {
        return Math.floor(Math.random() * 26);
    }

    // Function to make the active blocks draggable
    function initializeSortable() {
        var sortable = new Sortable(document.getElementById('blocksContainer'), {
            animation: 150, 
            ghostClass: 'sortable-ghost', 
        });
    }
});
