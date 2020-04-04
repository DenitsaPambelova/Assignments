
mytext="Beautiful is better than ugly. Explicit is better than implicit. Simple is better than complex.Complex is better than complicated."


textList = mytext.split(" ")
print(textList)
keys = [1, 2, 3, 4]
res = []

def increase_char(b):
    list2 = []
    for word in b:
        for char in word:
            n_letter = ord(char) + int(b[word])
            c_item = chr(n_letter)
            list2.append(c_item)
        list2.append(" ")
    return "".join(list2)


def process_text(text_array, keys, number_of_keys):
    temp_result = {}
    i = 0
    j = 0
    for i, eachWord in enumerate(text_array):
        if number_of_keys == 0:
            break
        if i < number_of_keys:
            temp_result.update({eachWord:keys[i]})
            i += 1
        else:
            while j < number_of_keys:
                textList.pop(0)
                j += 1
            process_text(text_array,keys, number_of_keys)

    res.insert(0,increase_char(temp_result))
    return "".join(res)


print(process_text(textList,keys,number_of_keys=4))


