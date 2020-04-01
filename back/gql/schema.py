from graphene import Argument, Field, ID, ObjectType, Schema
from graphene_django import DjangoConnectionField
from graphene_django.filter import DjangoFilterConnectionField

from books.models import Book
from .books.types import BookType
from .books.filters import BookFilter
from .books.mutations import BookCreate, BookDelete


class Query(ObjectType):
    books = DjangoFilterConnectionField(BookType, filterset_class=BookFilter)
    book = Field(BookType, id=Argument(ID, required=True))

    def resolve_books(root, info, **kwargs):
        return Book.objects.all()

    def resolve_book(root, info, **kwargs):
        return Book.objects.get(id=kwargs.get('id'))


class Mutation(ObjectType):
    book_create = BookCreate.Field()
    book_delete = BookDelete.Field()


schema = Schema(query=Query, mutation=Mutation)