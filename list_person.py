def list_person (txt):
    with open(txt, 'r', encoding='utf-8') as f:
        lines = f.readlines()
        new_lines = []
        result = []
        for l in lines:
            new_line = l.replace('\n','')
            name = new_line.split(" ")
            new_lines.append(new_line)
            result.append(name)

    wierd_name = {'one-name':[], 'more-than-two-names':[]}
    final_text = ""
    for n in result:
        text = """
        <person xml:id='{}'>
            <persName>{}<persName>
        <person>\n
        """.format(n[0][0]+n[1], name)
        final_text + text
            
    with open('final-list.txt', 'w', encoding='utf-8') as f:
        f.write(final_text)

    return wierd_name

print(list_person('trytext.txt'))
            