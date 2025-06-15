import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load dataset
df = pd.read_csv("indian_student_dropout_data_v2.csv")

# Pie Chart - Dropout vs. Non-Dropout
dropout_counts = df['Dropout_Status'].value_counts()
plt.figure(figsize=(6, 6))
plt.pie(dropout_counts, labels=dropout_counts.index, autopct='%1.1f%%', colors=['red', 'green'])
plt.title("Dropout vs. Non-Dropout Distribution")
plt.show()

# Bar Chart - Dropouts by Area
plt.figure(figsize=(10, 5))
sns.countplot(data=df, x='Area', hue='Dropout_Status', palette='Set2')
plt.title("Dropouts by Area")
plt.xticks(rotation=45)
plt.show()
