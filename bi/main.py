import streamlit as st
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns


def main():
    st.sidebar.title('Menu')
    st.title('Business Intelligence Dashboard')
    st.subheader('Data Analysis')
    st.write('This is a simple dashboard to analyze data')

    df = pd.DataFrame({
        'x': [1, 2, 3, 4, 5],
        'y': [10, 20, 30, 40, 50]
    })

    st.write(df)


if __name__ == '__main__':
    main()
