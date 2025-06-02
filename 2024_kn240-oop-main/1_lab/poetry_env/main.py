import pandas as pd

def main():
    data = {'Name': ['Danylo', 'Danker', 'Joe'], 'Age': [25, 30, 35]}
    df = pd.DataFrame(data)
    print(df)

if __name__ == "__main__":
    main()
