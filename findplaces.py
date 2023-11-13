from bs4 import BeautifulSoup

def extract_data_from_xml(xml_file):
    with open(xml_file, 'r', encoding='utf-8') as file:
        content = file.read()

    soup = BeautifulSoup(content, 'xml')

    result_dict = {}

    # Find all <div> elements with type="paragraph"
    paragraph_divs = soup.find_all('div', type='paragraph')


    for div in paragraph_divs:
        # Find the <head> element within the current <div>
        head_element = div.find('head')
        if head_element != None:
            pers_names = head_element('persName')
            pers_name_content = [pers_name.get_text(strip=True) for pers_name in pers_names]
            for pers_name in pers_name_content:
            


                # Find all <p> siblings of the current <div>
                p_elements = div.find_all('p')
                place_names = [place_name.get_text(strip=True) for p in p_elements for place_name in p.find_all('placeName')]
                # print(set(place_names))
        
        
        # # Flatten the list of <persName> elements
        # place_names_corrected = [item for sublist in place_names for item in sublist]
        # print(place_names_corrected)

        # Store the result in the dictionary
                result_dict[pers_name] = set(place_names)

    return result_dict

# # Example usage
xml_file_path = 'produced_data/body.xml'
result = extract_data_from_xml(xml_file_path)

# Print the result
for key, value in result.items():
    print(f'{key}: {value}')
