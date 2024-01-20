import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

def load_data(uploaded_file):
    if uploaded_file is not None:
        df = pd.read_csv(uploaded_file)
        return df
    return None

def predict_profit(model, year):
    return model.predict([[year]])[0]

def main():
    st.title('Profit Prediction and Data Visualization App')

    # Create tabs
    tabs = st.tabs(["Predict Profit", "Data Visualization"])

    # First tab: Predict Profit
    with tabs[0]:
        uploaded_file_predict = st.file_uploader("Choose a CSV file for prediction", type=["csv"])
        df_predict = load_data(uploaded_file_predict)

        if df_predict is not None:
            df_predict['profit'] = df_predict['profit']

            X_predict = df_predict[['year']]
            y_predict = df_predict['profit']

            X_train, X_test, y_train, y_test = train_test_split(X_predict, y_predict, test_size=0.2, random_state=69)

            model_predict = LinearRegression()
            model_predict.fit(X_train, y_train)

            st.sidebar.header('User Input for Prediction')
            year_predict = st.sidebar.number_input('Enter a year:', min_value=int(X_predict.min().iloc[0]))

            if st.sidebar.button('Predict'):
                prediction = predict_profit(model_predict, year_predict)
                st.sidebar.success(f'Predicted Profit: {prediction:.2f}cr')

            st.subheader('Data Preview for Prediction')
            st.write(df_predict)

    # Second tab: Data Visualization
    with tabs[1]:
        uploaded_file_visualize = st.file_uploader("Choose a CSV file for data visualization", type=["csv"])
        df_visualize = load_data(uploaded_file_visualize)
        if df_visualize is not None:
            st.subheader('Data Preview for Visualization')
            st.write(df_visualize)

            # Add data visualization
            st.subheader('Bar Chart for Product Prices')
            plt.figure(figsize=(10, 6))
            sns.barplot(x='name', y='price', data=df_visualize)
            plt.xlabel('Product Name')
            plt.ylabel('Price')
            plt.title('Product Prices')
            st.pyplot()

            st.subheader('Bar Chart for Product Quantities')
            plt.figure(figsize=(10, 6))
            sns.barplot(x='name', y='quantity', data=df_visualize)
            plt.xlabel('Product Name')
            plt.ylabel('Quantity')
            plt.title('Product Quantities')
            st.pyplot()

if __name__ == '__main__':
    main()
