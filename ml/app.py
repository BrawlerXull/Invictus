import streamlit as st
import pandas as pd
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
    st.title('Profit Prediction App')

    # Load data
    uploaded_file = st.file_uploader("Choose a CSV file", type=["csv"])
    df = load_data(uploaded_file)

    if df is not None:
        df['profit'] = df['profit']

        X = df[['year']]
        y = df['profit']

        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=69)

        model = LinearRegression()
        model.fit(X_train, y_train)

        st.sidebar.header('User Input')
        year = st.sidebar.number_input('Enter a year:', min_value=int(X.min().iloc[0]))

        if st.sidebar.button('Predict'):
            prediction = predict_profit(model, year)
            st.sidebar.success(f'Predicted Profit: {prediction:.2f}cr')

        st.subheader('Data Preview')
        st.write(df)

if __name__ == '__main__':
    main()
