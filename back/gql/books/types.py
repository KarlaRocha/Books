from graphene_django import DjangoObjectType
from books.models import Book


class BookType(DjangoObjectType):
    class Meta: 
        model = Book
        only_fields = (
            'id',
            'title',
            'year'
        )
        use_connection = True
