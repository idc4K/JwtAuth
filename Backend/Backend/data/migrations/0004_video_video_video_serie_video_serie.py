# Generated by Django 4.0.3 on 2022-09-05 19:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0003_rename_titre_video_title_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='video',
            field=models.FileField(null=True, upload_to='videos/'),
        ),
        migrations.AddField(
            model_name='video_serie',
            name='video_serie',
            field=models.FileField(null=True, upload_to='videos_serie/'),
        ),
    ]
