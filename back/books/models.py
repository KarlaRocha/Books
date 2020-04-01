from django.db import models
from django.utils.translation import ugettext_lazy as _


class Book(models.Model):
    title = models.CharField(max_length=225)
    year = models.DateField()

    class Meta:
        verbose_name = _('book')
        verbose_name_plural = _('books')
        ordering = ('title', )

    def __str__(self):
        return '{} {}'.format(self.pk, self.title)
