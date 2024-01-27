from django.db import models


class Post(models.Model):
    CONTENT_TYPES = (
        ('mv', 'movie'),
        ('msc', 'music'),
        ('act', 'activity'),
        ('vgm', 'video game'),
        ('bgm', 'board game'),
        ('loc', 'place'),
        ('o', 'other')
    )
    RATING = (
        (1, '1'),
        (2, '2'),
        (3, '3'),
        (4, '4'),
        (5, '5')
    )
    author = models.ForeignKey('auth.User', related_name='posts', on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100, blank=False)
    description = models.TextField()
    url = models.URLField(blank=True, default='')
    type = models.CharField(max_length=3, choices = CONTENT_TYPES, blank=False)
    comments = models.TextField()
    rating = models.IntegerField(choices=RATING, blank=False)

    class Meta:
        ordering = ['created']
    def _str_(self):
        return self.title
    



