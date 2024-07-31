import pandas as pd
import os
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeRegressor

# Determine the absolute path of the CSV file
current_dir = os.path.dirname(__file__)
csv_path = os.path.join(current_dir, 'Crop_recommendation.csv')

# Load the data
crop_data = pd.read_csv(csv_path)

#since label is an object,encode it to integer value
label_encoder = LabelEncoder()
label_encoder.fit(crop_data['label'])

#store  encoded label and its corresponding text label in a dictionary
le_name_mapping = dict(zip(label_encoder.transform(label_encoder.classes_), label_encoder.classes_))

# Encode the 'label' column and store it in a new column 'encoded_labe'
crop_data['encoded_label'] = label_encoder.fit_transform(crop_data['label'])

# Define the crop_feature columns (independant variables)
crop_features = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall']

# Split the data into features and target(Independant variables) 
X = crop_data[crop_features]
y = crop_data['encoded_label']

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Initialize the Decision Tree Regressor
regressor = DecisionTreeRegressor(random_state=42)

# Train the model
regressor.fit(X_train, y_train)

# Make predictions on the test set
y_pred_encoded = regressor.predict(X_test)

# Round the predicted values to the nearest integers
y_pred_encoded = y_pred_encoded.round().astype(int)

#create a function to predict the crop given N,P,K,etc

def predict_crop(N, P, K, temperature, humidity, ph, rainfall):
    # Create a DataFrame for the input
    input_data = pd.DataFrame([[N, P, K, temperature, humidity, ph, rainfall]], columns=crop_features)
    
    # Make the prediction
    encoded_prediction = regressor.predict(input_data)
    encoded_prediction = encoded_prediction.round().astype(int)
    
    return le_name_mapping.get(encoded_prediction[0])




