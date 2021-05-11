import pandas as pd
from flask import Flask,request,json
import numpy as np
import matplotlib
# from tkinter import *
# matplotlib.use('TkAgg')
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from PIL import Image
from io import BytesIO
import base64



app = Flask(__name__)

df = pd.read_csv("titanic.csv")
# print(df)

# df1 = pd.read_csv("test.csv")
df['Age']= df['Age'].fillna(df['Age'].mean())
df.dropna(subset=['Embarked'],inplace=True)
num_cols = df.select_dtypes([np.int64,np.float64]).columns.tolist()
num_cols.remove('PassengerId')



@app.route('/')
def index():
    return "Flask server running port on 5000"


@app.route('/histogram')
def histogram():
    
    #Generating Histograms for numeric columns
    a = [col for col in num_cols]
    df.hist(a)
    buf = BytesIO()
    plt.savefig(buf, format="png")
    
    # Embed the result in the html output.
    histdata = base64.b64encode(buf.getbuffer()).decode("ascii")
    
    return f"'data:image/png;base64,{histdata}'"


@app.route('/scatter') 
def scatter():
    
    from pandas.plotting import scatter_matrix
    
    num_cols = df.select_dtypes([np.int64,np.float64]).columns.tolist()
    num_cols.remove('PassengerId')
    #Studying the correlation of the columns using scatter plots
    scatter_matrix(df[num_cols],figsize=(50,50))
    buf = BytesIO()
    plt.savefig(buf, format="png")
    # Embed the result in the html output.
    data = base64.b64encode(buf.getbuffer()).decode("ascii")
 
    return f"'data:image/png;base64,{data}'"

@app.route('/category') 
def category():
    #Plotting categorical data against frequency
    obj_cols = df.select_dtypes('object').columns.tolist()
    # obj_cols = df.select_dtypes(exclude = ['int64','float64']).columns.tolist()

    # print(obj_cols)
    for col in obj_cols:
        df[col].value_counts().plot(kind='bar')
    
    # df['Embarked'].value_counts().plot(kind='bar')

    buf = BytesIO()
    plt.savefig(buf, format="png")
    # Embed the result in the html output.
    catdata = base64.b64encode(buf.getbuffer()).decode("ascii")

    return f"'data:image/png;base64,{catdata}'"
   

@app.route('/predict', methods = ['POST'])
def predict():
    import joblib
    model = joblib.load("model_joblib")
    '''
    For rendering results on React GUI
    '''
    data = request.get_json()
    result = []
    print(data)

    for key, value in data.items():
        print(key, value)
        result.append(value)
    a = [np.array(result)]
    # a = [np.asarray(result).reshape(1,-1)]
    print(a)
    prediction = model.predict(a)

    # output = round(prediction[0], 2)
    # return ("hello")
    if(prediction==0):
        return ('Passenger did not survived ')
    else:
        return ('Passenger is Survived')


if __name__ == "__main__":
    # threading.start_new_thread(category,())
    app.run(port=5000, debug=True)