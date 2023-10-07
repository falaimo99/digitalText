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
        if len(n) == 2:
            if n[0][0].isupper():
                text = """
                <person xml:id='{}' sameAs=''>
                    <persName>
                        <forename>{}</forename>
                        <surname>{}</surename>
                    <persName>
                <person>\n
                """.format(n[0][0]+n[1], n[0], n[1])
                final_text + text
            else:
                text = """
                <person xml:id='{}' sameAs=''>
                    <persName>
                        <forename>{}</forename>
                        <roleName>{}</roleName>
                    <persName>
                <person>\n
                """.format(n[0][0]+n[1], n[1], n[0].capitalize())
                final_text + text
        elif len(n) == 1:
            wierd_name['one-name'].append(n)
        else:
            wierd_name['more-than-two-names'].append(n)
            
    
    with open('final-list.txt', 'w', encoding='utf-8') as f:
        f.write(final_text)

    return wierd_name

print(list_person('trytext.txt'))
            