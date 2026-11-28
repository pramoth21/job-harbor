from sklearn.feature_extraction.text import TfidfVectorizer


def test_tfidf():
    documents = [
        "Java developer",
        "Python developer",
    ]

    vectorizer = TfidfVectorizer()
    result = vectorizer.fit_transform(documents)

    assert result.shape[0] == 2