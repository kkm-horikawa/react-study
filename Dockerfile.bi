FROM python:3.11-slim-bullseye

COPY ./bi /app

WORKDIR /app

RUN pip install -r requirements.txt

CMD ["streamlit", "run", "main.py", "--server.port", "8501"]