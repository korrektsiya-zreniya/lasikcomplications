import translators as ts
import sys
import logging
import re
from bs4 import BeautifulSoup

# Set up logging
logging.basicConfig(filename='translation.log', level=logging.INFO, format='%(asctime)s - %(message)s')

def translate_file(file_path):
    try:
        print(f"--- Translating {file_path} ---")
        with open(file_path, 'r', encoding='iso-8859-1') as f:
            content = f.read()
        
        translated_html = ts.translate_html(content, from_language='en', to_language='ru', translator='yandex')
        
        # Fix spacing around any HTML tag
        translated_html = re.sub(r'(\w)<', r'\1 <', translated_html)
        translated_html = re.sub(r'>(\w)', r'> \1', translated_html)

        # Use BeautifulSoup to change the meta tag
        soup = BeautifulSoup(translated_html, 'lxml')
        meta_tag = soup.find('meta', attrs={'http-equiv': 'Content-Type'})
        if meta_tag:
            meta_tag['content'] = 'text/html; charset=utf-8'

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(str(soup))
        
        logging.info(f"Successfully translated {file_path}")
        print(f"\nSuccessfully translated {file_path}\n")

    except Exception as e:
        logging.error(f"Error translating {file_path}: {e}")
        print(f"Error translating {file_path}: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        files_to_translate = sys.argv[1:]
        for file_path in files_to_translate:
            translate_file(file_path)
    else:
        print("Please provide a list of files to translate.")
