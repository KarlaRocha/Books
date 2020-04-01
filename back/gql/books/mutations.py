from graphene import Boolean, Field, ID, InputObjectType, Mutation, String, Date
from rest_framework import serializers

from books.models import Book
from .types import BookType


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = (
            'id',
            'title',
            'year'
        )

class BookInputType(InputObjectType):
    title = String()
    year = Date()


class BookCreate(Mutation):
    class Arguments:
        input = BookInputType(required=True)

    book = Field(BookType)

    @classmethod
    def mutate(cls, root, info, **data):
        serializer = BookSerializer(data=data.get('input'))
        serializer.is_valid(raise_exception=True)

        return BookCreate(book=serializer.save())


class BookDelete(Mutation):
    class Arguments:
        id = ID(required=True)

    ok = Boolean()

    @classmethod
    def mutate(cls, root, info, **data):
        book = Book.objects.get(id=data.get('id'))
        book.delete()

        return BookDelete(ok=True)