import pandas as pd

# Load dataset
df = pd.read_csv("indian_student_dropout_data_v2.csv")

# Display basic info
print(df.head())
print(df.info())

# Dropout statistics
print("\nTotal Dropouts vs Non-Dropouts:")
print(df['Dropout_Status'].value_counts())

print("\nDropouts by Area:")
print(df.groupby('Area')['Dropout_Status'].value_counts())

print("\nDropouts by Gender:")
print(df.groupby('Gender')['Dropout_Status'].value_counts())

print("\nDropout Reasons:")
print(df['Reason'].value_counts())
