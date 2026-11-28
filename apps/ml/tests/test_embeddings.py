def test_sentence_transformers_import():
    from sentence_transformers import SentenceTransformer

    assert SentenceTransformer is not None