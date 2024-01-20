import streamlit as st
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

df = pd.read_csv('data.csv')
df['profit'] = df['profit']

X = df[['year']]
y = df['profit']

X = df[['year']]
X.columns = ['year']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=69)

model = LinearRegression()
model.fit(X_train, y_train)

def predict_profit(year):
    return model.predict([[year]])[0]

def main():
    st.title('Profit Prediction App')
    
    st.sidebar.header('User Input')
    year = st.sidebar.number_input('Enter a year:', min_value=int(X.min().iloc[0]))

    if st.sidebar.button('Predict'):
        prediction = predict_profit(year)
        st.sidebar.success(f'Predicted Profit: {prediction:.2f}cr')

    st.subheader('Data Preview')
    st.write(df)

if __name__ == '__main__':
    main()
