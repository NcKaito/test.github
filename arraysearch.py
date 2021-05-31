
words = ['book', 'pencil', 'pen', 'note book', 'sharpener', 'rubber'] 


def arraySearch(words, search):
    for word in words: 
        if word == search:
            return True


print('Vrai' if arraySearch(words, 'note book') else 'Faux')
print('Vrai' if arraySearch(words, 'dog') else 'Faux')
