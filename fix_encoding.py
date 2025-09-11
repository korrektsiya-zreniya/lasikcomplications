import glob
from bs4 import BeautifulSoup
import logging

# Set up logging
logging.basicConfig(filename='encoding_fix.log', level=logging.INFO, format='%(asctime)s - %(message)s')

def fix_encoding(file_path):
    try:
        print(f"--- Checking and fixing {file_path} ---")
        content = None
        for encoding in ['utf-8', 'iso-8859-1', 'windows-1252']:
            try:
                with open(file_path, 'r', encoding=encoding) as f:
                    content = f.read()
                break
            except UnicodeDecodeError:
                continue
        
        if content is None:
            raise Exception("Could not decode the file with common encodings.")

        soup = BeautifulSoup(content, 'lxml')
        
        meta_tag = soup.find('meta', attrs={'http-equiv': 'Content-Type'})
        if meta_tag:
            meta_tag['content'] = 'text/html; charset=utf-8'
        else:
            # If no meta tag, create one
            new_meta = soup.new_tag('meta', attrs={'http-equiv': 'Content-Type', 'content': 'text/html; charset=utf-8'})
            if soup.head:
                soup.head.append(new_meta)

        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(str(soup))
        
        logging.info(f"Successfully fixed encoding for {file_path}")
        print(f"Successfully fixed encoding for {file_path}")

    except Exception as e:
        logging.error(f"Error fixing {file_path}: {e}")
        print(f"Error fixing {file_path}: {e}")

if __name__ == "__main__":
    files_to_fix = glob.glob('**/*.htm*', recursive=True)
    for file_path in files_to_fix:
        fix_encoding(file_path)
