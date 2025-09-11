import glob

all_files = set(glob.glob('**/*.htm*', recursive=True))

with open('translation.log', 'r') as f:
    log_content = f.readlines()

translated_files = set()
for line in log_content:
    try:
        path = line.split(' - Successfully translated ')[1].strip()
        translated_files.add(path)
    except IndexError:
        pass # Ignore lines that don't contain the success message

missing_files = all_files - translated_files
if missing_files:
    print("Непереведенные файлы:")
    for f in missing_files:
        print(f)
else:
    print("Все файлы переведены.")
