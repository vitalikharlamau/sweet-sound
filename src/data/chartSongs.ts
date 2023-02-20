interface ChartSongs {
  chart_items: ChartItem[];
  next_page: number;
}

interface ChartItem {
  _type: string;
  type: string;
  item: Item;
}

interface Item {
  _type: string;
  annotation_count: number;
  api_path: string;
  artist_names: string;
  full_title: string;
  header_image_thumbnail_url: string;
  header_image_url: string;
  id: number;
  instrumental: boolean;
  language: string;
  lyrics_owner_id: number;
  lyrics_state: string;
  lyrics_updated_at: number;
  path: string;
  pyongs_count: number;
  relationships_index_url: string;
  release_date_components: ReleaseDateComponents;
  release_date_for_display: string;
  release_date_with_abbreviated_month_for_display: string;
  song_art_image_thumbnail_url: string;
  song_art_image_url: string;
  stats: Stats;
  title: string;
  title_with_featured: string;
  updated_by_human_at: number;
  url: string;
  featured_artists: FeaturedArtist[];
  primary_artist: PrimaryArtist;
}

interface ReleaseDateComponents {
  year: number;
  month: number;
  day: number;
}

interface Stats {
  unreviewed_annotations: number;
  hot: boolean;
  pageviews: number;
  concurrents?: number;
}

interface FeaturedArtist {
  _type: string;
  api_path: string;
  header_image_url: string;
  id: number;
  image_url: string;
  index_character: string;
  is_meme_verified: boolean;
  is_verified: boolean;
  name: string;
  slug: string;
  url: string;
  iq?: number;
}

interface PrimaryArtist {
  _type: string;
  api_path: string;
  header_image_url: string;
  id: number;
  image_url: string;
  index_character: string;
  is_meme_verified: boolean;
  is_verified: boolean;
  name: string;
  slug: string;
  url: string;
  iq?: number;
}

export const chartSongs: ChartSongs = {
  chart_items: [
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 12,
        api_path: '/songs/3057010',
        artist_names: 'Luis Fonsi & Daddy Yankee (Ft. Justin Bieber)',
        full_title:
          'Despacito (Remix) by Luis Fonsi & Daddy Yankee (Ft. Justin Bieber)',
        header_image_thumbnail_url:
          'https://images.genius.com/93e9e3fa0ab18bc4613d385f287090c6.300x300x1.jpg',
        header_image_url:
          'https://images.genius.com/93e9e3fa0ab18bc4613d385f287090c6.1000x1000x1.jpg',
        id: 3057010,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 104344,
        lyrics_state: 'complete',
        lyrics_updated_at: 1675075365,
        path: '/Luis-fonsi-and-daddy-yankee-despacito-remix-lyrics',
        pyongs_count: 414,
        relationships_index_url:
          'https://genius.com/Luis-fonsi-and-daddy-yankee-despacito-remix-sample',
        release_date_components: {
          year: 2017,
          month: 4,
          day: 17,
        },
        release_date_for_display: 'April 17, 2017',
        release_date_with_abbreviated_month_for_display: 'Apr. 17, 2017',
        song_art_image_thumbnail_url:
          'https://images.genius.com/4164dff756ddd455675789bd67fe5f1a.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/4164dff756ddd455675789bd67fe5f1a.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 1,
          hot: false,
          pageviews: 23454968,
        },
        title: 'Despacito (Remix)',
        title_with_featured: 'Despacito (Remix) (Ft. Justin Bieber)',
        updated_by_human_at: 1675075365,
        url: 'https://genius.com/Luis-fonsi-and-daddy-yankee-despacito-remix-lyrics',
        featured_artists: [
          {
            _type: 'artist',
            api_path: '/artists/357',
            header_image_url:
              'https://images.genius.com/be2c60bdfb3ea6844a46cc5873c75b89.1000x563x1.jpg',
            id: 357,
            image_url:
              'https://images.genius.com/8c95afb142e16e2e053b4384514dc339.938x938x1.png',
            index_character: 'j',
            is_meme_verified: false,
            is_verified: true,
            name: 'Justin Bieber',
            slug: 'Justin-bieber',
            url: 'https://genius.com/artists/Justin-bieber',
            iq: 1533,
          },
        ],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/1119780',
          header_image_url:
            'https://images.genius.com/be123903c448d5f64ddac6476dc50aa4.847x476x1.jpg',
          id: 1119780,
          image_url:
            'https://images.genius.com/365d323e22c93fe869478efde436d233.393x393x1.jpg',
          index_character: 'l',
          is_meme_verified: false,
          is_verified: false,
          name: 'Luis Fonsi & Daddy Yankee',
          slug: 'Luis-fonsi-and-daddy-yankee',
          url: 'https://genius.com/artists/Luis-fonsi-and-daddy-yankee',
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 112,
        api_path: '/songs/235729',
        artist_names: 'Eminem',
        full_title: 'Rap God by Eminem',
        header_image_thumbnail_url:
          'https://images.genius.com/2b8df56a45a20bd15e8ef464302e12ae.300x300x1.jpg',
        header_image_url:
          'https://images.genius.com/2b8df56a45a20bd15e8ef464302e12ae.1000x1000x1.jpg',
        id: 235729,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 22533,
        lyrics_state: 'complete',
        lyrics_updated_at: 1676141482,
        path: '/Eminem-rap-god-lyrics',
        pyongs_count: 6723,
        relationships_index_url: 'https://genius.com/Eminem-rap-god-sample',
        release_date_components: {
          year: 2013,
          month: 10,
          day: 14,
        },
        release_date_for_display: 'October 14, 2013',
        release_date_with_abbreviated_month_for_display: 'Oct. 14, 2013',
        song_art_image_thumbnail_url:
          'https://images.genius.com/058e2359838c93395c36119b48a2eff6.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/058e2359838c93395c36119b48a2eff6.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 1,
          concurrents: 2,
          hot: false,
          pageviews: 18002902,
        },
        title: 'Rap God',
        title_with_featured: 'Rap God',
        updated_by_human_at: 1675898576,
        url: 'https://genius.com/Eminem-rap-god-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/45',
          header_image_url:
            'https://images.genius.com/7879bf220b8614a7fe4617006f132a92.1000x391x1.png',
          id: 45,
          image_url:
            'https://images.genius.com/76c536a17ca35f7edd1f78e129609fe0.573x573x1.jpg',
          index_character: 'e',
          is_meme_verified: true,
          is_verified: true,
          name: 'Eminem',
          slug: 'Eminem',
          url: 'https://genius.com/artists/Eminem',
          iq: 255644,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 25,
        api_path: '/songs/5832126',
        artist_names: 'Cardi B (Ft. Megan Thee Stallion)',
        full_title: 'WAP by Cardi B (Ft. Megan Thee Stallion)',
        header_image_thumbnail_url:
          'https://images.genius.com/fafcc0242f48734290ed600204a13b9b.300x300x1.png',
        header_image_url:
          'https://images.genius.com/fafcc0242f48734290ed600204a13b9b.1000x1000x1.png',
        id: 5832126,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 8431141,
        lyrics_state: 'complete',
        lyrics_updated_at: 1671053272,
        path: '/Cardi-b-wap-lyrics',
        pyongs_count: 343,
        relationships_index_url: 'https://genius.com/Cardi-b-wap-sample',
        release_date_components: {
          year: 2020,
          month: 8,
          day: 7,
        },
        release_date_for_display: 'August 7, 2020',
        release_date_with_abbreviated_month_for_display: 'Aug. 7, 2020',
        song_art_image_thumbnail_url:
          'https://images.genius.com/fafcc0242f48734290ed600204a13b9b.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/fafcc0242f48734290ed600204a13b9b.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 1,
          hot: false,
          pageviews: 16205250,
        },
        title: 'WAP',
        title_with_featured: 'WAP (Ft. Megan Thee Stallion)',
        updated_by_human_at: 1674734605,
        url: 'https://genius.com/Cardi-b-wap-lyrics',
        featured_artists: [
          {
            _type: 'artist',
            api_path: '/artists/1125517',
            header_image_url:
              'https://images.genius.com/922e5d41c05df0c47f537db1f8e0af33.623x340x1.png',
            id: 1125517,
            image_url:
              'https://images.genius.com/ca65e01bac6685628e4c5d912eb5e637.517x517x1.png',
            index_character: 'm',
            is_meme_verified: false,
            is_verified: true,
            name: 'Megan Thee Stallion',
            slug: 'Megan-thee-stallion',
            url: 'https://genius.com/artists/Megan-thee-stallion',
            iq: 1371,
          },
        ],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/621678',
          header_image_url:
            'https://images.genius.com/854e3b41f244636a74bdd7b7f4ee714c.1000x333x1.jpg',
          id: 621678,
          image_url:
            'https://images.genius.com/441a754aaf6098815149161fb2de0c09.577x577x1.png',
          index_character: 'c',
          is_meme_verified: true,
          is_verified: true,
          name: 'Cardi B',
          slug: 'Cardi-b',
          url: 'https://genius.com/artists/Cardi-b',
          iq: 1265,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 10,
        api_path: '/songs/2949128',
        artist_names: 'Ed Sheeran',
        full_title: 'Shape of You by Ed Sheeran',
        header_image_thumbnail_url:
          'https://images.genius.com/071a819f088609ee9d24b2dba4546b23.300x300x1.jpg',
        header_image_url:
          'https://images.genius.com/071a819f088609ee9d24b2dba4546b23.1000x1000x1.jpg',
        id: 2949128,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 458792,
        lyrics_state: 'complete',
        lyrics_updated_at: 1654767578,
        path: '/Ed-sheeran-shape-of-you-lyrics',
        pyongs_count: 405,
        relationships_index_url:
          'https://genius.com/Ed-sheeran-shape-of-you-sample',
        release_date_components: {
          year: 2017,
          month: 1,
          day: 6,
        },
        release_date_for_display: 'January 6, 2017',
        release_date_with_abbreviated_month_for_display: 'Jan. 6, 2017',
        song_art_image_thumbnail_url:
          'https://images.genius.com/86dcab92e27599f8556b5b8f21932449.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/86dcab92e27599f8556b5b8f21932449.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          hot: false,
          pageviews: 14723322,
        },
        title: 'Shape of You',
        title_with_featured: 'Shape of You',
        updated_by_human_at: 1671024171,
        url: 'https://genius.com/Ed-sheeran-shape-of-you-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/12418',
          header_image_url:
            'https://images.genius.com/aba5e6ac5d3d7a71482698fd971312fd.1000x429x1.jpg',
          id: 12418,
          image_url:
            'https://images.genius.com/b501daeff73d1b17610f47a5668f690a.1000x1000x1.jpg',
          index_character: 'e',
          is_meme_verified: true,
          is_verified: true,
          name: 'Ed Sheeran',
          slug: 'Ed-sheeran',
          url: 'https://genius.com/artists/Ed-sheeran',
          iq: 1300,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 20,
        api_path: '/songs/3039923',
        artist_names: 'Kendrick Lamar',
        full_title: 'HUMBLE. by Kendrick Lamar',
        header_image_thumbnail_url:
          'https://images.genius.com/ff22abdacf933fecfe39c9ad2a5fc441.300x153x1.jpg',
        header_image_url:
          'https://images.genius.com/ff22abdacf933fecfe39c9ad2a5fc441.1000x510x1.jpg',
        id: 3039923,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 104344,
        lyrics_state: 'complete',
        lyrics_updated_at: 1651260131,
        path: '/Kendrick-lamar-humble-lyrics',
        pyongs_count: 1197,
        relationships_index_url:
          'https://genius.com/Kendrick-lamar-humble-sample',
        release_date_components: {
          year: 2017,
          month: 3,
          day: 30,
        },
        release_date_for_display: 'March 30, 2017',
        release_date_with_abbreviated_month_for_display: 'Mar. 30, 2017',
        song_art_image_thumbnail_url:
          'https://images.genius.com/483306c535608c27f9e3781b854dc91d.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/483306c535608c27f9e3781b854dc91d.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          concurrents: 2,
          hot: false,
          pageviews: 11381518,
        },
        title: 'HUMBLE.',
        title_with_featured: 'HUMBLE.',
        updated_by_human_at: 1669671860,
        url: 'https://genius.com/Kendrick-lamar-humble-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/1421',
          header_image_url:
            'https://images.genius.com/3514a6d32afe88c48f22263e303f55d0.1000x601x1.jpg',
          id: 1421,
          image_url:
            'https://images.genius.com/d6d96651b423fa5a83c38ee2a4c6c939.1000x1000x1.jpg',
          index_character: 'k',
          is_meme_verified: true,
          is_verified: true,
          name: 'Kendrick Lamar',
          slug: 'Kendrick-lamar',
          url: 'https://genius.com/artists/Kendrick-lamar',
          iq: 53911,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 12,
        api_path: '/songs/727466',
        artist_names: 'The Weeknd',
        full_title: 'The Hills by The Weeknd',
        header_image_thumbnail_url:
          'https://images.genius.com/fb35f79575da142d0455f631e2c1298a.300x300x1.jpg',
        header_image_url:
          'https://images.genius.com/fb35f79575da142d0455f631e2c1298a.1000x1000x1.jpg',
        id: 727466,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 104344,
        lyrics_state: 'complete',
        lyrics_updated_at: 1662685315,
        path: '/The-weeknd-the-hills-lyrics',
        pyongs_count: 1797,
        relationships_index_url:
          'https://genius.com/The-weeknd-the-hills-sample',
        release_date_components: {
          year: 2015,
          month: 5,
          day: 27,
        },
        release_date_for_display: 'May 27, 2015',
        release_date_with_abbreviated_month_for_display: 'May. 27, 2015',
        song_art_image_thumbnail_url:
          'https://images.genius.com/3c9c680375fd63ba2734075225832456.300x300x1.jpg',
        song_art_image_url:
          'https://images.genius.com/3c9c680375fd63ba2734075225832456.1000x1000x1.jpg',
        stats: {
          unreviewed_annotations: 0,
          hot: false,
          pageviews: 9755633,
        },
        title: 'The Hills',
        title_with_featured: 'The Hills',
        updated_by_human_at: 1669928148,
        url: 'https://genius.com/The-weeknd-the-hills-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/2358',
          header_image_url:
            'https://images.genius.com/25e5b8d1c8beb0a3cd62e550e14f83ca.1000x166x1.jpg',
          id: 2358,
          image_url:
            'https://images.genius.com/1bab7f9dbd1216febc16d73ae4da9bd0.1000x1000x1.jpg',
          index_character: 'w',
          is_meme_verified: false,
          is_verified: true,
          name: 'The Weeknd',
          slug: 'The-weeknd',
          url: 'https://genius.com/artists/The-weeknd',
          iq: 15429,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 22,
        api_path: '/songs/1063',
        artist_names: 'Queen',
        full_title: 'Bohemian Rhapsody by Queen',
        header_image_thumbnail_url:
          'https://images.genius.com/1889656e64d8f5b736618ffb500896d5.300x300x1.jpg',
        header_image_url:
          'https://images.genius.com/1889656e64d8f5b736618ffb500896d5.1000x1000x1.jpg',
        id: 1063,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 3,
        lyrics_state: 'complete',
        lyrics_updated_at: 1663081629,
        path: '/Queen-bohemian-rhapsody-lyrics',
        pyongs_count: 690,
        relationships_index_url:
          'https://genius.com/Queen-bohemian-rhapsody-sample',
        release_date_components: {
          year: 1975,
          month: 10,
          day: 31,
        },
        release_date_for_display: 'October 31, 1975',
        release_date_with_abbreviated_month_for_display: 'Oct. 31, 1975',
        song_art_image_thumbnail_url:
          'https://images.genius.com/ff9ddef65ab95da61354ce587748e2e9.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/ff9ddef65ab95da61354ce587748e2e9.600x600x1.png',
        stats: {
          unreviewed_annotations: 0,
          concurrents: 2,
          hot: false,
          pageviews: 9617146,
        },
        title: 'Bohemian Rhapsody',
        title_with_featured: 'Bohemian Rhapsody',
        updated_by_human_at: 1674374977,
        url: 'https://genius.com/Queen-bohemian-rhapsody-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/563',
          header_image_url:
            'https://images.genius.com/c16f3f7965058979962777c05c36d25d.999x425x1.jpg',
          id: 563,
          image_url:
            'https://images.genius.com/97bcb5755cb9780d76b37726a0ce4bef.1000x1000x1.jpg',
          index_character: 'q',
          is_meme_verified: false,
          is_verified: false,
          name: 'Queen',
          slug: 'Queen',
          url: 'https://genius.com/artists/Queen',
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 52,
        api_path: '/songs/2845980',
        artist_names: 'Migos (Ft. Lil Uzi Vert)',
        full_title: 'Bad and Boujee by Migos (Ft. Lil Uzi Vert)',
        header_image_thumbnail_url:
          'https://images.genius.com/fea54543ffbe1f90ea5c988ba38724b7.300x169x1.webp',
        header_image_url:
          'https://images.genius.com/fea54543ffbe1f90ea5c988ba38724b7.1000x562x1.webp',
        id: 2845980,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 282633,
        lyrics_state: 'complete',
        lyrics_updated_at: 1669425806,
        path: '/Migos-bad-and-boujee-lyrics',
        pyongs_count: 591,
        relationships_index_url:
          'https://genius.com/Migos-bad-and-boujee-sample',
        release_date_components: {
          year: 2016,
          month: 8,
          day: 27,
        },
        release_date_for_display: 'August 27, 2016',
        release_date_with_abbreviated_month_for_display: 'Aug. 27, 2016',
        song_art_image_thumbnail_url:
          'https://images.genius.com/2fec6685c2aa2f875cab422bdb68d099.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/2fec6685c2aa2f875cab422bdb68d099.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 1,
          concurrents: 4,
          hot: false,
          pageviews: 9426770,
        },
        title: 'Bad and Boujee',
        title_with_featured: 'Bad and Boujee (Ft. Lil Uzi Vert)',
        updated_by_human_at: 1672852169,
        url: 'https://genius.com/Migos-bad-and-boujee-lyrics',
        featured_artists: [
          {
            _type: 'artist',
            api_path: '/artists/217208',
            header_image_url:
              'https://images.genius.com/fc90b951e209e3e896cd3dc913bccf71.1000x333x1.jpg',
            id: 217208,
            image_url:
              'https://images.genius.com/3619e57354afa7dd5e65b9c261982ccc.640x640x1.jpg',
            index_character: 'l',
            is_meme_verified: false,
            is_verified: true,
            name: 'Lil Uzi Vert',
            slug: 'Lil-uzi-vert',
            url: 'https://genius.com/artists/Lil-uzi-vert',
            iq: 5845,
          },
        ],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/44080',
          header_image_url:
            'https://images.genius.com/7fbac3bee19b97a9b5b2805512da490a.640x640x1.jpg',
          id: 44080,
          image_url:
            'https://images.genius.com/7fbac3bee19b97a9b5b2805512da490a.640x640x1.jpg',
          index_character: 'm',
          is_meme_verified: true,
          is_verified: true,
          name: 'Migos',
          slug: 'Migos',
          url: 'https://genius.com/artists/Migos',
          iq: 1495,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 49,
        api_path: '/songs/3876994',
        artist_names: 'Travis Scott (Ft. Drake)',
        full_title: 'SICKO MODE by Travis Scott (Ft. Drake)',
        header_image_thumbnail_url:
          'https://images.genius.com/30d45e3f7eff395f450df8121f8e9b52.300x169x1.jpg',
        header_image_url:
          'https://images.genius.com/30d45e3f7eff395f450df8121f8e9b52.1000x563x1.jpg',
        id: 3876994,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 1849231,
        lyrics_state: 'complete',
        lyrics_updated_at: 1675145767,
        path: '/Travis-scott-sicko-mode-lyrics',
        pyongs_count: 743,
        relationships_index_url:
          'https://genius.com/Travis-scott-sicko-mode-sample',
        release_date_components: {
          year: 2018,
          month: 8,
          day: 3,
        },
        release_date_for_display: 'August 3, 2018',
        release_date_with_abbreviated_month_for_display: 'Aug. 3, 2018',
        song_art_image_thumbnail_url:
          'https://images.genius.com/3ddb5a3396c5c340b7328702dc3c1d11.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/3ddb5a3396c5c340b7328702dc3c1d11.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 2,
          concurrents: 2,
          hot: false,
          pageviews: 9313424,
        },
        title: 'SICKO MODE',
        title_with_featured: 'SICKO MODE (Ft. Drake)',
        updated_by_human_at: 1675145767,
        url: 'https://genius.com/Travis-scott-sicko-mode-lyrics',
        featured_artists: [
          {
            _type: 'artist',
            api_path: '/artists/130',
            header_image_url:
              'https://images.genius.com/660da2a2d6c98034963ce733c8d9d816.308x164x1.jpg',
            id: 130,
            image_url:
              'https://images.genius.com/26104e61a238b70abfbad57be3de4359.1000x1000x1.jpg',
            index_character: 'd',
            is_meme_verified: false,
            is_verified: false,
            name: 'Drake',
            slug: 'Drake',
            url: 'https://genius.com/artists/Drake',
          },
        ],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/20185',
          header_image_url:
            'https://images.genius.com/77659552bac452cb5dee1ac1d68c62a9.480x288x24.gif',
          id: 20185,
          image_url:
            'https://images.genius.com/5d19fecdb3828ca9ec89dda588e2eb7d.1000x1000x1.jpg',
          index_character: 't',
          is_meme_verified: true,
          is_verified: true,
          name: 'Travis Scott',
          slug: 'Travis-scott',
          url: 'https://genius.com/artists/Travis-scott',
          iq: 5345,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 20,
        api_path: '/songs/3315890',
        artist_names: 'Drake',
        full_title: "God's Plan by Drake",
        header_image_thumbnail_url:
          'https://images.genius.com/2fbaf73c369f7c27799cf7dd76b0bb1c.300x300x1.png',
        header_image_url:
          'https://images.genius.com/2fbaf73c369f7c27799cf7dd76b0bb1c.440x440x1.png',
        id: 3315890,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 1507505,
        lyrics_state: 'complete',
        lyrics_updated_at: 1666052356,
        path: '/Drake-gods-plan-lyrics',
        pyongs_count: 934,
        relationships_index_url: 'https://genius.com/Drake-gods-plan-sample',
        release_date_components: {
          year: 2018,
          month: 1,
          day: 19,
        },
        release_date_for_display: 'January 19, 2018',
        release_date_with_abbreviated_month_for_display: 'Jan. 19, 2018',
        song_art_image_thumbnail_url:
          'https://images.genius.com/2fbaf73c369f7c27799cf7dd76b0bb1c.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/2fbaf73c369f7c27799cf7dd76b0bb1c.440x440x1.png',
        stats: {
          unreviewed_annotations: 0,
          concurrents: 3,
          hot: false,
          pageviews: 9301306,
        },
        title: 'God’s Plan',
        title_with_featured: "God's Plan",
        updated_by_human_at: 1673530929,
        url: 'https://genius.com/Drake-gods-plan-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/130',
          header_image_url:
            'https://images.genius.com/660da2a2d6c98034963ce733c8d9d816.308x164x1.jpg',
          id: 130,
          image_url:
            'https://images.genius.com/26104e61a238b70abfbad57be3de4359.1000x1000x1.jpg',
          index_character: 'd',
          is_meme_verified: false,
          is_verified: false,
          name: 'Drake',
          slug: 'Drake',
          url: 'https://genius.com/artists/Drake',
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 9,
        api_path: '/songs/4063065',
        artist_names: 'Ariana Grande',
        full_title: '​thank u, next by Ariana Grande',
        header_image_thumbnail_url:
          'https://images.genius.com/893eb6735abcf6a464cc034a5912d44b.300x300x1.jpg',
        header_image_url:
          'https://images.genius.com/893eb6735abcf6a464cc034a5912d44b.1000x1000x1.jpg',
        id: 4063065,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 104344,
        lyrics_state: 'complete',
        lyrics_updated_at: 1658595035,
        path: '/Ariana-grande-thank-u-next-lyrics',
        pyongs_count: 511,
        relationships_index_url:
          'https://genius.com/Ariana-grande-thank-u-next-sample',
        release_date_components: {
          year: 2018,
          month: 11,
          day: 3,
        },
        release_date_for_display: 'November 3, 2018',
        release_date_with_abbreviated_month_for_display: 'Nov. 3, 2018',
        song_art_image_thumbnail_url:
          'https://images.genius.com/eb82ade82179500cffaf44999d82057a.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/eb82ade82179500cffaf44999d82057a.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          hot: false,
          pageviews: 9159758,
        },
        title: '​thank u, next',
        title_with_featured: '​thank u, next',
        updated_by_human_at: 1674982428,
        url: 'https://genius.com/Ariana-grande-thank-u-next-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/26507',
          header_image_url:
            'https://images.genius.com/0b63409589894fbd955a658fc89f08dd.1000x429x1.jpg',
          id: 26507,
          image_url:
            'https://images.genius.com/d36a47955ac0ddb12748c5e7c2bd4b4b.640x640x1.jpg',
          index_character: 'a',
          is_meme_verified: false,
          is_verified: true,
          name: 'Ariana Grande',
          slug: 'Ariana-grande',
          url: 'https://genius.com/artists/Ariana-grande',
          iq: 2636,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 30,
        api_path: '/songs/3244990',
        artist_names: 'Big Shaq',
        full_title: "Man's Not Hot by Big Shaq",
        header_image_thumbnail_url:
          'https://images.genius.com/7ad88294d5bdf20bbda5b1dd63d3dcb3.300x175x1.jpg',
        header_image_url:
          'https://images.genius.com/7ad88294d5bdf20bbda5b1dd63d3dcb3.740x431x1.jpg',
        id: 3244990,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 30939,
        lyrics_state: 'complete',
        lyrics_updated_at: 1672951462,
        path: '/Big-shaq-mans-not-hot-lyrics',
        pyongs_count: 422,
        relationships_index_url:
          'https://genius.com/Big-shaq-mans-not-hot-sample',
        release_date_components: {
          year: 2017,
          month: 9,
          day: 22,
        },
        release_date_for_display: 'September 22, 2017',
        release_date_with_abbreviated_month_for_display: 'Sep. 22, 2017',
        song_art_image_thumbnail_url:
          'https://images.genius.com/fda7cc8f2cb7787981d61c15359192c0.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/fda7cc8f2cb7787981d61c15359192c0.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          hot: false,
          pageviews: 8739799,
        },
        title: 'Man’s Not Hot',
        title_with_featured: "Man's Not Hot",
        updated_by_human_at: 1672951462,
        url: 'https://genius.com/Big-shaq-mans-not-hot-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/1223820',
          header_image_url:
            'https://images.genius.com/e590d1d9364eab5fe84f730c9ad2fad4.1000x563x1.jpg',
          id: 1223820,
          image_url:
            'https://images.genius.com/0499e392e0dda44c82a6f4533dfe4baa.599x599x1.jpg',
          index_character: 'b',
          is_meme_verified: false,
          is_verified: true,
          name: 'Big Shaq',
          slug: 'Big-shaq',
          url: 'https://genius.com/artists/Big-shaq',
          iq: 13954,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 17,
        api_path: '/songs/3003630',
        artist_names: 'Lil Uzi Vert',
        full_title: 'XO TOUR Llif3 by Lil Uzi Vert',
        header_image_thumbnail_url:
          'https://images.genius.com/4f77159b7468ebe2d1467e5089cec8c5.300x173x1.png',
        header_image_url:
          'https://images.genius.com/4f77159b7468ebe2d1467e5089cec8c5.1000x578x1.png',
        id: 3003630,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 1665086,
        lyrics_state: 'complete',
        lyrics_updated_at: 1658024199,
        path: '/Lil-uzi-vert-xo-tour-llif3-lyrics',
        pyongs_count: 798,
        relationships_index_url:
          'https://genius.com/Lil-uzi-vert-xo-tour-llif3-sample',
        release_date_components: {
          year: 2017,
          month: 2,
          day: 26,
        },
        release_date_for_display: 'February 26, 2017',
        release_date_with_abbreviated_month_for_display: 'Feb. 26, 2017',
        song_art_image_thumbnail_url:
          'https://images.genius.com/fb92d6ae51794dfd11016f43a3678399.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/fb92d6ae51794dfd11016f43a3678399.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          concurrents: 2,
          hot: false,
          pageviews: 8630500,
        },
        title: 'XO TOUR Llif3',
        title_with_featured: 'XO TOUR Llif3',
        updated_by_human_at: 1669131321,
        url: 'https://genius.com/Lil-uzi-vert-xo-tour-llif3-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/217208',
          header_image_url:
            'https://images.genius.com/fc90b951e209e3e896cd3dc913bccf71.1000x333x1.jpg',
          id: 217208,
          image_url:
            'https://images.genius.com/3619e57354afa7dd5e65b9c261982ccc.640x640x1.jpg',
          index_character: 'l',
          is_meme_verified: false,
          is_verified: true,
          name: 'Lil Uzi Vert',
          slug: 'Lil-uzi-vert',
          url: 'https://genius.com/artists/Lil-uzi-vert',
          iq: 5845,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 26,
        api_path: '/songs/299177',
        artist_names: 'Beyoncé (Ft. JAY-Z)',
        full_title: 'Drunk in Love by Beyoncé (Ft. JAY-Z)',
        header_image_thumbnail_url:
          'https://images.genius.com/9dc66306cd3f6d048434600ad9fea747.300x300x1.jpg',
        header_image_url:
          'https://images.genius.com/9dc66306cd3f6d048434600ad9fea747.1000x1000x1.jpg',
        id: 299177,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 149650,
        lyrics_state: 'complete',
        lyrics_updated_at: 1657350739,
        path: '/Beyonce-drunk-in-love-lyrics',
        pyongs_count: 3240,
        relationships_index_url:
          'https://genius.com/Beyonce-drunk-in-love-sample',
        release_date_components: {
          year: 2013,
          month: 12,
          day: 17,
        },
        release_date_for_display: 'December 17, 2013',
        release_date_with_abbreviated_month_for_display: 'Dec. 17, 2013',
        song_art_image_thumbnail_url:
          'https://images.genius.com/8b5bfe335567fc7673d46ccf72176b2c.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/8b5bfe335567fc7673d46ccf72176b2c.800x800x1.png',
        stats: {
          unreviewed_annotations: 0,
          concurrents: 2,
          hot: false,
          pageviews: 8474165,
        },
        title: 'Drunk in Love',
        title_with_featured: 'Drunk in Love (Ft. JAY-Z)',
        updated_by_human_at: 1659660478,
        url: 'https://genius.com/Beyonce-drunk-in-love-lyrics',
        featured_artists: [
          {
            _type: 'artist',
            api_path: '/artists/2',
            header_image_url:
              'https://images.genius.com/57f67753a0fe8ce5ff4a2ab903fbe850.500x301x1.png',
            id: 2,
            image_url:
              'https://images.genius.com/dab4680bbb0569024ef3df3d1e87c277.570x570x1.jpg',
            index_character: 'j',
            is_meme_verified: true,
            is_verified: true,
            name: 'JAY-Z',
            slug: 'Jay-z',
            url: 'https://genius.com/artists/Jay-z',
            iq: 225,
          },
        ],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/498',
          header_image_url:
            'https://images.genius.com/2325d4756b13cb29d0eca6e90be3248a.1000x667x1.jpg',
          id: 498,
          image_url:
            'https://images.genius.com/5d016c50d8d877e09687a782bcfaa390.840x840x1.jpg',
          index_character: 'b',
          is_meme_verified: false,
          is_verified: false,
          name: 'Beyoncé',
          slug: 'Beyonce',
          url: 'https://genius.com/artists/Beyonce',
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 14,
        api_path: '/songs/3050777',
        artist_names: 'Logic (Ft. Alessia Cara & Khalid)',
        full_title: '1-800-273-8255 by Logic (Ft. Alessia Cara & Khalid)',
        header_image_thumbnail_url:
          'https://images.genius.com/bbf246bb8fcb4d164b5ef30a489a4837.300x300x1.png',
        header_image_url:
          'https://images.genius.com/bbf246bb8fcb4d164b5ef30a489a4837.1000x1000x1.png',
        id: 3050777,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 1548008,
        lyrics_state: 'complete',
        lyrics_updated_at: 1670300851,
        path: '/Logic-1-800-273-8255-lyrics',
        pyongs_count: 821,
        relationships_index_url:
          'https://genius.com/Logic-1-800-273-8255-sample',
        release_date_components: {
          year: 2017,
          month: 4,
          day: 28,
        },
        release_date_for_display: 'April 28, 2017',
        release_date_with_abbreviated_month_for_display: 'Apr. 28, 2017',
        song_art_image_thumbnail_url:
          'https://images.genius.com/f898e230528d5695fbf5e34f50784233.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/f898e230528d5695fbf5e34f50784233.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          concurrents: 3,
          hot: false,
          pageviews: 8137577,
        },
        title: '1-800-273-8255',
        title_with_featured: '1-800-273-8255 (Ft. Alessia Cara & Khalid)',
        updated_by_human_at: 1670300851,
        url: 'https://genius.com/Logic-1-800-273-8255-lyrics',
        featured_artists: [
          {
            _type: 'artist',
            api_path: '/artists/394321',
            header_image_url:
              'https://images.genius.com/45fb1e070d6bd8ba01b50b689304b186.874x1000x1.jpg',
            id: 394321,
            image_url:
              'https://images.genius.com/3d4c802dfae1db67f06633906e4f0782.604x604x1.jpg',
            index_character: 'a',
            is_meme_verified: false,
            is_verified: true,
            name: 'Alessia Cara',
            slug: 'Alessia-cara',
            url: 'https://genius.com/artists/Alessia-cara',
            iq: 9629,
          },
          {
            _type: 'artist',
            api_path: '/artists/9932',
            header_image_url:
              'https://images.genius.com/c01e020a11d8bc58ac1ac65d4c65b4ed.1000x333x1.jpg',
            id: 9932,
            image_url:
              'https://images.genius.com/df20882bcb5a498fb0f2ac992183500d.1000x1000x1.jpg',
            index_character: 'k',
            is_meme_verified: false,
            is_verified: true,
            name: 'Khalid',
            slug: 'Khalid',
            url: 'https://genius.com/artists/Khalid',
            iq: 13207,
          },
        ],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/7922',
          header_image_url:
            'https://images.genius.com/f6b08bf607b94a279d743e14bbca2a3a.1000x563x1.jpg',
          id: 7922,
          image_url:
            'https://images.genius.com/0f975524d106026e89de983689d007c4.900x900x1.jpg',
          index_character: 'l',
          is_meme_verified: true,
          is_verified: true,
          name: 'Logic',
          slug: 'Logic',
          url: 'https://genius.com/artists/Logic',
          iq: 96639,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 26,
        api_path: '/songs/3095483',
        artist_names: 'Cardi B',
        full_title: 'Bodak Yellow by Cardi B',
        header_image_thumbnail_url:
          'https://images.genius.com/9f92b837efe7107322fffb59f4699068.300x300x1.jpg',
        header_image_url:
          'https://images.genius.com/9f92b837efe7107322fffb59f4699068.1000x1000x1.jpg',
        id: 3095483,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 1784320,
        lyrics_state: 'complete',
        lyrics_updated_at: 1642741307,
        path: '/Cardi-b-bodak-yellow-lyrics',
        pyongs_count: 304,
        relationships_index_url:
          'https://genius.com/Cardi-b-bodak-yellow-sample',
        release_date_components: {
          year: 2017,
          month: 6,
          day: 16,
        },
        release_date_for_display: 'June 16, 2017',
        release_date_with_abbreviated_month_for_display: 'Jun. 16, 2017',
        song_art_image_thumbnail_url:
          'https://images.genius.com/8c332180ff4f85c086cd7e51d9f5a286.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/8c332180ff4f85c086cd7e51d9f5a286.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          hot: false,
          pageviews: 8111546,
        },
        title: 'Bodak Yellow',
        title_with_featured: 'Bodak Yellow',
        updated_by_human_at: 1646242511,
        url: 'https://genius.com/Cardi-b-bodak-yellow-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/621678',
          header_image_url:
            'https://images.genius.com/854e3b41f244636a74bdd7b7f4ee714c.1000x333x1.jpg',
          id: 621678,
          image_url:
            'https://images.genius.com/441a754aaf6098815149161fb2de0c09.577x577x1.png',
          index_character: 'c',
          is_meme_verified: true,
          is_verified: true,
          name: 'Cardi B',
          slug: 'Cardi-b',
          url: 'https://genius.com/artists/Cardi-b',
          iq: 1265,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 21,
        api_path: '/songs/2398213',
        artist_names: 'Rihanna (Ft. Drake)',
        full_title: 'Work by Rihanna (Ft. Drake)',
        header_image_thumbnail_url:
          'https://images.genius.com/05dcb548d5373d059869882a1635e65e.300x300x1.jpg',
        header_image_url:
          'https://images.genius.com/05dcb548d5373d059869882a1635e65e.1000x1000x1.jpg',
        id: 2398213,
        instrumental: false,
        language: 'nl',
        lyrics_owner_id: 672397,
        lyrics_state: 'complete',
        lyrics_updated_at: 1675534626,
        path: '/Rihanna-work-lyrics',
        pyongs_count: 623,
        relationships_index_url: 'https://genius.com/Rihanna-work-sample',
        release_date_components: {
          year: 2016,
          month: 1,
          day: 27,
        },
        release_date_for_display: 'January 27, 2016',
        release_date_with_abbreviated_month_for_display: 'Jan. 27, 2016',
        song_art_image_thumbnail_url:
          'https://images.genius.com/28287cc9efed5371676ff501f3ca738f.300x300x1.jpg',
        song_art_image_url:
          'https://images.genius.com/28287cc9efed5371676ff501f3ca738f.1000x1000x1.jpg',
        stats: {
          unreviewed_annotations: 0,
          concurrents: 6,
          hot: false,
          pageviews: 7969971,
        },
        title: 'Work',
        title_with_featured: 'Work (Ft. Drake)',
        updated_by_human_at: 1675534625,
        url: 'https://genius.com/Rihanna-work-lyrics',
        featured_artists: [
          {
            _type: 'artist',
            api_path: '/artists/130',
            header_image_url:
              'https://images.genius.com/660da2a2d6c98034963ce733c8d9d816.308x164x1.jpg',
            id: 130,
            image_url:
              'https://images.genius.com/26104e61a238b70abfbad57be3de4359.1000x1000x1.jpg',
            index_character: 'd',
            is_meme_verified: false,
            is_verified: false,
            name: 'Drake',
            slug: 'Drake',
            url: 'https://genius.com/artists/Drake',
          },
        ],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/89',
          header_image_url:
            'https://images.genius.com/7fbc0f95ca9d7d24853328749c8affd1.1000x333x1.jpg',
          id: 89,
          image_url:
            'https://images.genius.com/171508341b8ce58320f1c6434fa78de8.399x399x1.jpg',
          index_character: 'r',
          is_meme_verified: true,
          is_verified: true,
          name: 'Rihanna',
          slug: 'Rihanna',
          url: 'https://genius.com/artists/Rihanna',
          iq: 2248,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 7,
        api_path: '/songs/3430186',
        artist_names: 'XXXTENTACION',
        full_title: 'SAD! by XXXTENTACION',
        header_image_thumbnail_url:
          'https://images.genius.com/8b673f80818e4cc1b975e8d8cd81344c.300x300x1.png',
        header_image_url:
          'https://images.genius.com/8b673f80818e4cc1b975e8d8cd81344c.1000x1000x1.png',
        id: 3430186,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 432937,
        lyrics_state: 'complete',
        lyrics_updated_at: 1650839207,
        path: '/Xxxtentacion-sad-lyrics',
        pyongs_count: 1374,
        relationships_index_url: 'https://genius.com/Xxxtentacion-sad-sample',
        release_date_components: {
          year: 2018,
          month: 3,
          day: 2,
        },
        release_date_for_display: 'March 2, 2018',
        release_date_with_abbreviated_month_for_display: 'Mar. 2, 2018',
        song_art_image_thumbnail_url:
          'https://images.genius.com/8b673f80818e4cc1b975e8d8cd81344c.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/8b673f80818e4cc1b975e8d8cd81344c.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          concurrents: 2,
          hot: false,
          pageviews: 7900638,
        },
        title: 'SAD!',
        title_with_featured: 'SAD!',
        updated_by_human_at: 1665252789,
        url: 'https://genius.com/Xxxtentacion-sad-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/396565',
          header_image_url:
            'https://images.genius.com/83281176c66e39feea1b35f435388edb.1000x333x1.jpg',
          id: 396565,
          image_url:
            'https://images.genius.com/7337afb84752ce941b08f860be07a13d.548x548x1.jpg',
          index_character: 'x',
          is_meme_verified: false,
          is_verified: true,
          name: 'XXXTENTACION',
          slug: 'Xxxtentacion',
          url: 'https://genius.com/artists/Xxxtentacion',
          iq: 364,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 3,
        api_path: '/songs/3219597',
        artist_names: 'Sam Smith',
        full_title: 'Too Good at Goodbyes by Sam Smith',
        header_image_thumbnail_url:
          'https://images.genius.com/6a6b61394a4bbbd6f0c7361cc5903988.300x300x1.png',
        header_image_url:
          'https://images.genius.com/6a6b61394a4bbbd6f0c7361cc5903988.1000x1000x1.png',
        id: 3219597,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 2891574,
        lyrics_state: 'complete',
        lyrics_updated_at: 1635791405,
        path: '/Sam-smith-too-good-at-goodbyes-lyrics',
        pyongs_count: 332,
        relationships_index_url:
          'https://genius.com/Sam-smith-too-good-at-goodbyes-sample',
        release_date_components: {
          year: 2017,
          month: 9,
          day: 8,
        },
        release_date_for_display: 'September 8, 2017',
        release_date_with_abbreviated_month_for_display: 'Sep. 8, 2017',
        song_art_image_thumbnail_url:
          'https://images.genius.com/a635a284eda8a951e7ef44ad404308bc.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/a635a284eda8a951e7ef44ad404308bc.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          hot: false,
          pageviews: 7830694,
        },
        title: 'Too Good at Goodbyes',
        title_with_featured: 'Too Good at Goodbyes',
        updated_by_human_at: 1675022919,
        url: 'https://genius.com/Sam-smith-too-good-at-goodbyes-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/43383',
          header_image_url:
            'https://images.genius.com/788096e01f1254a65d2e31981a3eeb46.1000x210x1.jpg',
          id: 43383,
          image_url:
            'https://images.genius.com/623bd838c59f38795302446e51d4b301.450x450x1.jpg',
          index_character: 's',
          is_meme_verified: false,
          is_verified: false,
          name: 'Sam Smith',
          slug: 'Sam-smith',
          url: 'https://genius.com/artists/Sam-smith',
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 43,
        api_path: '/songs/93539',
        artist_names: 'A$AP Rocky (Ft. 2 Chainz, Drake & Kendrick Lamar)',
        full_title:
          "Fuckin' Problems by A$AP Rocky (Ft. 2 Chainz, Drake & Kendrick Lamar)",
        header_image_thumbnail_url:
          'https://images.genius.com/f9700d73044459d7ef44e2f8711e4896.300x111x1.jpg',
        header_image_url:
          'https://images.genius.com/f9700d73044459d7ef44e2f8711e4896.851x315x1.jpg',
        id: 93539,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 458792,
        lyrics_state: 'complete',
        lyrics_updated_at: 1674784100,
        path: '/A-ap-rocky-fuckin-problems-lyrics',
        pyongs_count: 772,
        relationships_index_url:
          'https://genius.com/A-ap-rocky-fuckin-problems-sample',
        release_date_components: {
          year: 2012,
          month: 10,
          day: 24,
        },
        release_date_for_display: 'October 24, 2012',
        release_date_with_abbreviated_month_for_display: 'Oct. 24, 2012',
        song_art_image_thumbnail_url:
          'https://images.genius.com/b0946c2ceb53c735b31de9245829dfd9.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/b0946c2ceb53c735b31de9245829dfd9.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 1,
          hot: false,
          pageviews: 7794371,
        },
        title: 'Fuckin’ Problems',
        title_with_featured:
          "Fuckin' Problems (Ft. 2 Chainz, Drake & Kendrick Lamar)",
        updated_by_human_at: 1674784100,
        url: 'https://genius.com/A-ap-rocky-fuckin-problems-lyrics',
        featured_artists: [
          {
            _type: 'artist',
            api_path: '/artists/1421',
            header_image_url:
              'https://images.genius.com/3514a6d32afe88c48f22263e303f55d0.1000x601x1.jpg',
            id: 1421,
            image_url:
              'https://images.genius.com/d6d96651b423fa5a83c38ee2a4c6c939.1000x1000x1.jpg',
            index_character: 'k',
            is_meme_verified: true,
            is_verified: true,
            name: 'Kendrick Lamar',
            slug: 'Kendrick-lamar',
            url: 'https://genius.com/artists/Kendrick-lamar',
            iq: 53911,
          },
          {
            _type: 'artist',
            api_path: '/artists/14325',
            header_image_url:
              'https://images.genius.com/54036584132834d0f358492ec81ed5fe.494x594x1.jpg',
            id: 14325,
            image_url:
              'https://images.genius.com/f82a00deb2e816cc89005a9839eead69.1000x1000x1.jpg',
            index_character: '0',
            is_meme_verified: false,
            is_verified: true,
            name: '2 Chainz',
            slug: '2-chainz',
            url: 'https://genius.com/artists/2-chainz',
            iq: 8481,
          },
          {
            _type: 'artist',
            api_path: '/artists/130',
            header_image_url:
              'https://images.genius.com/660da2a2d6c98034963ce733c8d9d816.308x164x1.jpg',
            id: 130,
            image_url:
              'https://images.genius.com/26104e61a238b70abfbad57be3de4359.1000x1000x1.jpg',
            index_character: 'd',
            is_meme_verified: false,
            is_verified: false,
            name: 'Drake',
            slug: 'Drake',
            url: 'https://genius.com/artists/Drake',
          },
        ],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/12417',
          header_image_url:
            'https://images.genius.com/4e896a55925d464c3c3545a2d9a0d15b.1000x564x1.jpg',
          id: 12417,
          image_url:
            'https://images.genius.com/41eca064ad6fb1279eb20a6f546ac054.602x602x1.jpg',
          index_character: 'a',
          is_meme_verified: false,
          is_verified: true,
          name: 'A$AP Rocky',
          slug: 'A-ap-rocky',
          url: 'https://genius.com/artists/A-ap-rocky',
          iq: 32445,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 27,
        api_path: '/songs/4067762',
        artist_names: 'Ariana Grande',
        full_title: '7 rings by Ariana Grande',
        header_image_thumbnail_url:
          'https://images.genius.com/39e41252985b10aa8cdcedffe97d1ff7.300x300x1.jpg',
        header_image_url:
          'https://images.genius.com/39e41252985b10aa8cdcedffe97d1ff7.1000x1000x1.jpg',
        id: 4067762,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 2891574,
        lyrics_state: 'complete',
        lyrics_updated_at: 1657308529,
        path: '/Ariana-grande-7-rings-lyrics',
        pyongs_count: 468,
        relationships_index_url:
          'https://genius.com/Ariana-grande-7-rings-sample',
        release_date_components: {
          year: 2019,
          month: 1,
          day: 18,
        },
        release_date_for_display: 'January 18, 2019',
        release_date_with_abbreviated_month_for_display: 'Jan. 18, 2019',
        song_art_image_thumbnail_url:
          'https://images.genius.com/f7bcb9687dff02847f0f376cddb23165.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/f7bcb9687dff02847f0f376cddb23165.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          hot: false,
          pageviews: 7529025,
        },
        title: '7 rings',
        title_with_featured: '7 rings',
        updated_by_human_at: 1674982412,
        url: 'https://genius.com/Ariana-grande-7-rings-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/26507',
          header_image_url:
            'https://images.genius.com/0b63409589894fbd955a658fc89f08dd.1000x429x1.jpg',
          id: 26507,
          image_url:
            'https://images.genius.com/d36a47955ac0ddb12748c5e7c2bd4b4b.640x640x1.jpg',
          index_character: 'a',
          is_meme_verified: false,
          is_verified: true,
          name: 'Ariana Grande',
          slug: 'Ariana-grande',
          url: 'https://genius.com/artists/Ariana-grande',
          iq: 2636,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 19,
        api_path: '/songs/2851948',
        artist_names: 'The Weeknd (Ft. Daft Punk)',
        full_title: 'Starboy by The Weeknd (Ft. Daft Punk)',
        header_image_thumbnail_url:
          'https://images.genius.com/93682d19e0fe838094b4a663a6bbdb82.300x300x1.jpg',
        header_image_url:
          'https://images.genius.com/93682d19e0fe838094b4a663a6bbdb82.1000x1000x1.jpg',
        id: 2851948,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 282633,
        lyrics_state: 'complete',
        lyrics_updated_at: 1673848986,
        path: '/The-weeknd-starboy-lyrics',
        pyongs_count: 618,
        relationships_index_url: 'https://genius.com/The-weeknd-starboy-sample',
        release_date_components: {
          year: 2016,
          month: 9,
          day: 21,
        },
        release_date_for_display: 'September 21, 2016',
        release_date_with_abbreviated_month_for_display: 'Sep. 21, 2016',
        song_art_image_thumbnail_url:
          'https://images.genius.com/e5926fe79d3129ad62d1c06568d4fbea.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/e5926fe79d3129ad62d1c06568d4fbea.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          concurrents: 2,
          hot: false,
          pageviews: 7502880,
        },
        title: 'Starboy',
        title_with_featured: 'Starboy (Ft. Daft Punk)',
        updated_by_human_at: 1675865302,
        url: 'https://genius.com/The-weeknd-starboy-lyrics',
        featured_artists: [
          {
            _type: 'artist',
            api_path: '/artists/13585',
            header_image_url:
              'https://images.genius.com/50010bc5fcaac6803d781f64e9dd89b4.1000x165x1.jpg',
            id: 13585,
            image_url:
              'https://images.genius.com/a508888fd6a96cadcf835ecf95b1c1ae.1000x1000x1.jpg',
            index_character: 'd',
            is_meme_verified: false,
            is_verified: false,
            name: 'Daft Punk',
            slug: 'Daft-punk',
            url: 'https://genius.com/artists/Daft-punk',
          },
        ],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/2358',
          header_image_url:
            'https://images.genius.com/25e5b8d1c8beb0a3cd62e550e14f83ca.1000x166x1.jpg',
          id: 2358,
          image_url:
            'https://images.genius.com/1bab7f9dbd1216febc16d73ae4da9bd0.1000x1000x1.jpg',
          index_character: 'w',
          is_meme_verified: false,
          is_verified: true,
          name: 'The Weeknd',
          slug: 'The-weeknd',
          url: 'https://genius.com/artists/The-weeknd',
          iq: 15429,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 14,
        api_path: '/songs/3807759',
        artist_names: 'Drake',
        full_title: 'In My Feelings by Drake',
        header_image_thumbnail_url:
          'https://images.genius.com/5c677b7bfc2f696abf2e2d928301bb44.300x300x1.jpg',
        header_image_url:
          'https://images.genius.com/5c677b7bfc2f696abf2e2d928301bb44.1000x1000x1.jpg',
        id: 3807759,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 4424691,
        lyrics_state: 'complete',
        lyrics_updated_at: 1657344278,
        path: '/Drake-in-my-feelings-lyrics',
        pyongs_count: 214,
        relationships_index_url:
          'https://genius.com/Drake-in-my-feelings-sample',
        release_date_components: {
          year: 2018,
          month: 6,
          day: 29,
        },
        release_date_for_display: 'June 29, 2018',
        release_date_with_abbreviated_month_for_display: 'Jun. 29, 2018',
        song_art_image_thumbnail_url:
          'https://images.genius.com/5c677b7bfc2f696abf2e2d928301bb44.300x300x1.jpg',
        song_art_image_url:
          'https://images.genius.com/5c677b7bfc2f696abf2e2d928301bb44.1000x1000x1.jpg',
        stats: {
          unreviewed_annotations: 0,
          hot: false,
          pageviews: 7486928,
        },
        title: 'In My Feelings',
        title_with_featured: 'In My Feelings',
        updated_by_human_at: 1675075213,
        url: 'https://genius.com/Drake-in-my-feelings-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/130',
          header_image_url:
            'https://images.genius.com/660da2a2d6c98034963ce733c8d9d816.308x164x1.jpg',
          id: 130,
          image_url:
            'https://images.genius.com/26104e61a238b70abfbad57be3de4359.1000x1000x1.jpg',
          index_character: 'd',
          is_meme_verified: false,
          is_verified: false,
          name: 'Drake',
          slug: 'Drake',
          url: 'https://genius.com/artists/Drake',
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 22,
        api_path: '/songs/496445',
        artist_names: 'Fetty Wap',
        full_title: 'Trap Queen by Fetty Wap',
        header_image_thumbnail_url:
          'https://images.rapgenius.com/694274eb49f35ea1ad1acc36ab99390e.300x300x1.jpg',
        header_image_url:
          'https://images.rapgenius.com/694274eb49f35ea1ad1acc36ab99390e.640x640x1.jpg',
        id: 496445,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 104344,
        lyrics_state: 'complete',
        lyrics_updated_at: 1668960681,
        path: '/Fetty-wap-trap-queen-lyrics',
        pyongs_count: 3196,
        relationships_index_url:
          'https://genius.com/Fetty-wap-trap-queen-sample',
        release_date_components: {
          year: 2014,
          month: 3,
          day: 8,
        },
        release_date_for_display: 'March 8, 2014',
        release_date_with_abbreviated_month_for_display: 'Mar. 8, 2014',
        song_art_image_thumbnail_url:
          'https://images.genius.com/9bc4ba5cffb770435bf740eedfa79e23.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/9bc4ba5cffb770435bf740eedfa79e23.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          hot: false,
          pageviews: 7235667,
        },
        title: 'Trap Queen',
        title_with_featured: 'Trap Queen',
        updated_by_human_at: 1674845540,
        url: 'https://genius.com/Fetty-wap-trap-queen-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/216609',
          header_image_url:
            'https://images.genius.com/6f9786819f1b74337c108e2bb78a715c.1000x333x1.jpg',
          id: 216609,
          image_url:
            'https://images.genius.com/4cc6cc38b2c6e8848b72a5cf2891e2ce.1000x1000x1.jpg',
          index_character: 'f',
          is_meme_verified: true,
          is_verified: true,
          name: 'Fetty Wap',
          slug: 'Fetty-wap',
          url: 'https://genius.com/artists/Fetty-wap',
          iq: 100,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 82,
        api_path: '/songs/90478',
        artist_names: 'Kendrick Lamar (Ft. MC Eiht)',
        full_title: '​m.A.A.d city by Kendrick Lamar (Ft. MC Eiht)',
        header_image_thumbnail_url:
          'https://images.genius.com/c129d5d114d2cd2303d72e073746a5db.300x300x1.jpg',
        header_image_url:
          'https://images.genius.com/c129d5d114d2cd2303d72e073746a5db.1000x1000x1.jpg',
        id: 90478,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 103971,
        lyrics_state: 'complete',
        lyrics_updated_at: 1671746295,
        path: '/Kendrick-lamar-maad-city-lyrics',
        pyongs_count: 2235,
        relationships_index_url:
          'https://genius.com/Kendrick-lamar-maad-city-sample',
        release_date_components: {
          year: 2012,
          month: 10,
          day: 22,
        },
        release_date_for_display: 'October 22, 2012',
        release_date_with_abbreviated_month_for_display: 'Oct. 22, 2012',
        song_art_image_thumbnail_url:
          'https://images.genius.com/c129d5d114d2cd2303d72e073746a5db.300x300x1.jpg',
        song_art_image_url:
          'https://images.genius.com/c129d5d114d2cd2303d72e073746a5db.1000x1000x1.jpg',
        stats: {
          unreviewed_annotations: 0,
          hot: false,
          pageviews: 7120274,
        },
        title: '​m.A.A.d city',
        title_with_featured: '​m.A.A.d city (Ft. MC Eiht)',
        updated_by_human_at: 1671746296,
        url: 'https://genius.com/Kendrick-lamar-maad-city-lyrics',
        featured_artists: [
          {
            _type: 'artist',
            api_path: '/artists/4637',
            header_image_url:
              'https://images.genius.com/5f7c5b37dd412d8dcfe5318a0f05d167.396x297x1.jpg',
            id: 4637,
            image_url:
              'https://images.genius.com/5f7c5b37dd412d8dcfe5318a0f05d167.396x297x1.jpg',
            index_character: 'm',
            is_meme_verified: false,
            is_verified: false,
            name: 'MC Eiht',
            slug: 'Mc-eiht',
            url: 'https://genius.com/artists/Mc-eiht',
          },
        ],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/1421',
          header_image_url:
            'https://images.genius.com/3514a6d32afe88c48f22263e303f55d0.1000x601x1.jpg',
          id: 1421,
          image_url:
            'https://images.genius.com/d6d96651b423fa5a83c38ee2a4c6c939.1000x1000x1.jpg',
          index_character: 'k',
          is_meme_verified: true,
          is_verified: true,
          name: 'Kendrick Lamar',
          slug: 'Kendrick-lamar',
          url: 'https://genius.com/artists/Kendrick-lamar',
          iq: 53911,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 19,
        api_path: '/songs/2942139',
        artist_names: 'Post Malone (Ft. 21 Savage)',
        full_title: '​​rockstar by Post Malone (Ft. 21 Savage)',
        header_image_thumbnail_url:
          'https://images.genius.com/87a4ba40b84e33af2475f336420d0c19.300x300x1.png',
        header_image_url:
          'https://images.genius.com/87a4ba40b84e33af2475f336420d0c19.1000x1000x1.png',
        id: 2942139,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 104344,
        lyrics_state: 'complete',
        lyrics_updated_at: 1670204627,
        path: '/Post-malone-rockstar-lyrics',
        pyongs_count: 769,
        relationships_index_url:
          'https://genius.com/Post-malone-rockstar-sample',
        release_date_components: {
          year: 2017,
          month: 9,
          day: 15,
        },
        release_date_for_display: 'September 15, 2017',
        release_date_with_abbreviated_month_for_display: 'Sep. 15, 2017',
        song_art_image_thumbnail_url:
          'https://images.genius.com/fcea8961b4c35793ce051a4637990615.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/fcea8961b4c35793ce051a4637990615.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          hot: false,
          pageviews: 7098483,
        },
        title: '​​rockstar',
        title_with_featured: '​​rockstar (Ft. 21 Savage)',
        updated_by_human_at: 1674054954,
        url: 'https://genius.com/Post-malone-rockstar-lyrics',
        featured_artists: [
          {
            _type: 'artist',
            api_path: '/artists/430404',
            header_image_url:
              'https://images.genius.com/cfcc3cd32c8978428e469cade68c1531.681x383x1.jpg',
            id: 430404,
            image_url:
              'https://images.genius.com/aa32202cc20d1dde62e57940a8b278b2.770x770x1.png',
            index_character: '0',
            is_meme_verified: false,
            is_verified: true,
            name: '21 Savage',
            slug: '21-savage',
            url: 'https://genius.com/artists/21-savage',
            iq: 5559,
          },
        ],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/326362',
          header_image_url:
            'https://images.genius.com/1cc70a5e8d2d4c7a16635170b2d8cac1.1000x563x1.jpg',
          id: 326362,
          image_url:
            'https://images.genius.com/6771553aba28386ce3b7ee55724d43c2.1000x1000x1.jpg',
          index_character: 'p',
          is_meme_verified: true,
          is_verified: true,
          name: 'Post Malone',
          slug: 'Post-malone',
          url: 'https://genius.com/artists/Post-malone',
          iq: 15258,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 65,
        api_path: '/songs/70324',
        artist_names: 'Kanye West (Ft. 2 Chainz, Big Sean & Pusha T)',
        full_title: 'Mercy by Kanye West (Ft. 2 Chainz, Big Sean & Pusha T)',
        header_image_thumbnail_url:
          'https://images.genius.com/e0bb63ab1e7ddb2307011b443888ebf9.300x300x1.png',
        header_image_url:
          'https://images.genius.com/e0bb63ab1e7ddb2307011b443888ebf9.1000x1000x1.png',
        id: 70324,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 104344,
        lyrics_state: 'complete',
        lyrics_updated_at: 1673954945,
        path: '/Kanye-west-mercy-lyrics',
        pyongs_count: 371,
        relationships_index_url: 'https://genius.com/Kanye-west-mercy-sample',
        release_date_components: {
          year: 2012,
          month: 4,
          day: 3,
        },
        release_date_for_display: 'April 3, 2012',
        release_date_with_abbreviated_month_for_display: 'Apr. 3, 2012',
        song_art_image_thumbnail_url:
          'https://images.genius.com/e0bb63ab1e7ddb2307011b443888ebf9.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/e0bb63ab1e7ddb2307011b443888ebf9.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 1,
          hot: false,
          pageviews: 7060603,
        },
        title: 'Mercy',
        title_with_featured: 'Mercy (Ft. 2 Chainz, Big Sean & Pusha T)',
        updated_by_human_at: 1673954945,
        url: 'https://genius.com/Kanye-west-mercy-lyrics',
        featured_artists: [
          {
            _type: 'artist',
            api_path: '/artists/492',
            header_image_url:
              'https://images.genius.com/9993d1270da8380d4db0f5b2dc2ddce5.747x363x1.jpg',
            id: 492,
            image_url:
              'https://images.genius.com/9e5e3136782920b95ae156055d141a52.640x640x1.jpg',
            index_character: 'b',
            is_meme_verified: true,
            is_verified: true,
            name: 'Big Sean',
            slug: 'Big-sean',
            url: 'https://genius.com/artists/Big-sean',
            iq: 18129,
          },
          {
            _type: 'artist',
            api_path: '/artists/643',
            header_image_url:
              'https://images.genius.com/1bc34e5deca22b440c5d186ef06720f2.1000x668x1.jpg',
            id: 643,
            image_url:
              'https://images.genius.com/6e863462f9401219e3773b05eb383f11.1000x1000x1.jpg',
            index_character: 'p',
            is_meme_verified: false,
            is_verified: true,
            name: 'Pusha T',
            slug: 'Pusha-t',
            url: 'https://genius.com/artists/Pusha-t',
            iq: 62800,
          },
          {
            _type: 'artist',
            api_path: '/artists/14325',
            header_image_url:
              'https://images.genius.com/54036584132834d0f358492ec81ed5fe.494x594x1.jpg',
            id: 14325,
            image_url:
              'https://images.genius.com/f82a00deb2e816cc89005a9839eead69.1000x1000x1.jpg',
            index_character: '0',
            is_meme_verified: false,
            is_verified: true,
            name: '2 Chainz',
            slug: '2-chainz',
            url: 'https://genius.com/artists/2-chainz',
            iq: 8481,
          },
        ],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/72',
          header_image_url:
            'https://images.genius.com/85bd7e9db6a0320ad5b783a116b6c0ff.750x900x1.jpg',
          id: 72,
          image_url:
            'https://images.genius.com/5747a529dca274b0f2765d919c555b2d.1000x1000x1.jpg',
          index_character: 'k',
          is_meme_verified: false,
          is_verified: false,
          name: 'Kanye West',
          slug: 'Kanye-west',
          url: 'https://genius.com/artists/Kanye-west',
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 58,
        api_path: '/songs/3958196',
        artist_names: 'Eminem',
        full_title: 'Killshot by Eminem',
        header_image_thumbnail_url:
          'https://images.genius.com/b1da996dcb2acb56506b8e02612e8561.300x300x1.png',
        header_image_url:
          'https://images.genius.com/b1da996dcb2acb56506b8e02612e8561.1000x1000x1.png',
        id: 3958196,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 104344,
        lyrics_state: 'complete',
        lyrics_updated_at: 1674507944,
        path: '/Eminem-killshot-lyrics',
        pyongs_count: 1812,
        relationships_index_url: 'https://genius.com/Eminem-killshot-sample',
        release_date_components: {
          year: 2018,
          month: 9,
          day: 14,
        },
        release_date_for_display: 'September 14, 2018',
        release_date_with_abbreviated_month_for_display: 'Sep. 14, 2018',
        song_art_image_thumbnail_url:
          'https://images.genius.com/b1da996dcb2acb56506b8e02612e8561.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/b1da996dcb2acb56506b8e02612e8561.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          concurrents: 2,
          hot: false,
          pageviews: 7052430,
        },
        title: 'Killshot',
        title_with_featured: 'Killshot',
        updated_by_human_at: 1674507944,
        url: 'https://genius.com/Eminem-killshot-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/45',
          header_image_url:
            'https://images.genius.com/7879bf220b8614a7fe4617006f132a92.1000x391x1.png',
          id: 45,
          image_url:
            'https://images.genius.com/76c536a17ca35f7edd1f78e129609fe0.573x573x1.jpg',
          index_character: 'e',
          is_meme_verified: true,
          is_verified: true,
          name: 'Eminem',
          slug: 'Eminem',
          url: 'https://genius.com/artists/Eminem',
          iq: 255644,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 13,
        api_path: '/songs/3185661',
        artist_names: 'XXXTENTACION',
        full_title: 'Jocelyn Flores by XXXTENTACION',
        header_image_thumbnail_url:
          'https://images.genius.com/3909b41f2c27e688e4caec3637cdba36.300x300x1.png',
        header_image_url:
          'https://images.genius.com/3909b41f2c27e688e4caec3637cdba36.1000x1000x1.png',
        id: 3185661,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 432937,
        lyrics_state: 'complete',
        lyrics_updated_at: 1654650998,
        path: '/Xxxtentacion-jocelyn-flores-lyrics',
        pyongs_count: 809,
        relationships_index_url:
          'https://genius.com/Xxxtentacion-jocelyn-flores-sample',
        release_date_components: {
          year: 2017,
          month: 8,
          day: 25,
        },
        release_date_for_display: 'August 25, 2017',
        release_date_with_abbreviated_month_for_display: 'Aug. 25, 2017',
        song_art_image_thumbnail_url:
          'https://images.genius.com/3909b41f2c27e688e4caec3637cdba36.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/3909b41f2c27e688e4caec3637cdba36.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          hot: false,
          pageviews: 7008082,
        },
        title: 'Jocelyn Flores',
        title_with_featured: 'Jocelyn Flores',
        updated_by_human_at: 1656784008,
        url: 'https://genius.com/Xxxtentacion-jocelyn-flores-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/396565',
          header_image_url:
            'https://images.genius.com/83281176c66e39feea1b35f435388edb.1000x333x1.jpg',
          id: 396565,
          image_url:
            'https://images.genius.com/7337afb84752ce941b08f860be07a13d.548x548x1.jpg',
          index_character: 'x',
          is_meme_verified: false,
          is_verified: true,
          name: 'XXXTENTACION',
          slug: 'Xxxtentacion',
          url: 'https://genius.com/artists/Xxxtentacion',
          iq: 364,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 10,
        api_path: '/songs/2263723',
        artist_names: 'Drake',
        full_title: 'Hotline Bling by Drake',
        header_image_thumbnail_url:
          'https://images.genius.com/615f00c44861bf07488b9c262183fda0.300x300x1.png',
        header_image_url:
          'https://images.genius.com/615f00c44861bf07488b9c262183fda0.1000x1000x1.png',
        id: 2263723,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 744505,
        lyrics_state: 'complete',
        lyrics_updated_at: 1657465551,
        path: '/Drake-hotline-bling-lyrics',
        pyongs_count: 645,
        relationships_index_url:
          'https://genius.com/Drake-hotline-bling-sample',
        release_date_components: {
          year: 2015,
          month: 7,
          day: 25,
        },
        release_date_for_display: 'July 25, 2015',
        release_date_with_abbreviated_month_for_display: 'Jul. 25, 2015',
        song_art_image_thumbnail_url:
          'https://images.genius.com/f3be0158d3a067a81b075686a3a2e63d.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/f3be0158d3a067a81b075686a3a2e63d.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          hot: false,
          pageviews: 6983759,
        },
        title: 'Hotline Bling',
        title_with_featured: 'Hotline Bling',
        updated_by_human_at: 1672344310,
        url: 'https://genius.com/Drake-hotline-bling-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/130',
          header_image_url:
            'https://images.genius.com/660da2a2d6c98034963ce733c8d9d816.308x164x1.jpg',
          id: 130,
          image_url:
            'https://images.genius.com/26104e61a238b70abfbad57be3de4359.1000x1000x1.jpg',
          index_character: 'd',
          is_meme_verified: false,
          is_verified: false,
          name: 'Drake',
          slug: 'Drake',
          url: 'https://genius.com/artists/Drake',
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 18,
        api_path: '/songs/2458848',
        artist_names: 'The Chainsmokers (Ft. Halsey)',
        full_title: 'Closer by The Chainsmokers (Ft. Halsey)',
        header_image_thumbnail_url:
          'https://images.genius.com/6bf26906b0f253b8f10fcb988281f4ac.300x300x1.jpg',
        header_image_url:
          'https://images.genius.com/6bf26906b0f253b8f10fcb988281f4ac.1000x1000x1.jpg',
        id: 2458848,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 3158619,
        lyrics_state: 'complete',
        lyrics_updated_at: 1651598765,
        path: '/The-chainsmokers-closer-lyrics',
        pyongs_count: 204,
        relationships_index_url:
          'https://genius.com/The-chainsmokers-closer-sample',
        release_date_components: {
          year: 2016,
          month: 7,
          day: 29,
        },
        release_date_for_display: 'July 29, 2016',
        release_date_with_abbreviated_month_for_display: 'Jul. 29, 2016',
        song_art_image_thumbnail_url:
          'https://images.genius.com/4e9008aab2815435e8454cc2a0c932e6.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/4e9008aab2815435e8454cc2a0c932e6.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          concurrents: 3,
          hot: false,
          pageviews: 6788463,
        },
        title: 'Closer',
        title_with_featured: 'Closer (Ft. Halsey)',
        updated_by_human_at: 1659375806,
        url: 'https://genius.com/The-chainsmokers-closer-lyrics',
        featured_artists: [
          {
            _type: 'artist',
            api_path: '/artists/228636',
            header_image_url:
              'https://images.genius.com/85deb0559ca06e3922a4a62b6c07e0d8.1000x333x1.jpg',
            id: 228636,
            image_url:
              'https://images.genius.com/0e0e33f7d22427d3b5a6792aed988cd5.400x400x1.jpg',
            index_character: 'h',
            is_meme_verified: true,
            is_verified: true,
            name: 'Halsey',
            slug: 'Halsey',
            url: 'https://genius.com/artists/Halsey',
            iq: 1525,
          },
        ],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/150934',
          header_image_url:
            'https://images.genius.com/aa998d5e56c715c5f31af515030932b9.1000x333x1.jpg',
          id: 150934,
          image_url:
            'https://images.genius.com/8d6110971339068428d7860fd3a87d96.900x900x1.jpg',
          index_character: 'c',
          is_meme_verified: true,
          is_verified: true,
          name: 'The Chainsmokers',
          slug: 'The-chainsmokers',
          url: 'https://genius.com/artists/The-chainsmokers',
          iq: 682,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 34,
        api_path: '/songs/207',
        artist_names: 'Eminem',
        full_title: 'Lose Yourself by Eminem',
        header_image_thumbnail_url:
          'https://images.genius.com/3d2eced2857919f7a8e66dd264d67c53.300x155x1.png',
        header_image_url:
          'https://images.genius.com/3d2eced2857919f7a8e66dd264d67c53.1000x516x1.png',
        id: 207,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 8,
        lyrics_state: 'complete',
        lyrics_updated_at: 1674230240,
        path: '/Eminem-lose-yourself-lyrics',
        pyongs_count: 1530,
        relationships_index_url:
          'https://genius.com/Eminem-lose-yourself-sample',
        release_date_components: {
          year: 2002,
          month: 10,
          day: 28,
        },
        release_date_for_display: 'October 28, 2002',
        release_date_with_abbreviated_month_for_display: 'Oct. 28, 2002',
        song_art_image_thumbnail_url:
          'https://images.genius.com/ce61c1b2664c5952984e30f9b59f1346.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/ce61c1b2664c5952984e30f9b59f1346.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 1,
          concurrents: 2,
          hot: false,
          pageviews: 6779596,
        },
        title: 'Lose Yourself',
        title_with_featured: 'Lose Yourself',
        updated_by_human_at: 1675073698,
        url: 'https://genius.com/Eminem-lose-yourself-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/45',
          header_image_url:
            'https://images.genius.com/7879bf220b8614a7fe4617006f132a92.1000x391x1.png',
          id: 45,
          image_url:
            'https://images.genius.com/76c536a17ca35f7edd1f78e129609fe0.573x573x1.jpg',
          index_character: 'e',
          is_meme_verified: true,
          is_verified: true,
          name: 'Eminem',
          slug: 'Eminem',
          url: 'https://genius.com/artists/Eminem',
          iq: 255644,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 11,
        api_path: '/songs/2970719',
        artist_names: 'Imagine Dragons',
        full_title: 'Believer by Imagine Dragons',
        header_image_thumbnail_url:
          'https://images.genius.com/86e0d33ebe09cafa4e686ad0f38dc3df.300x300x1.jpg',
        header_image_url:
          'https://images.genius.com/86e0d33ebe09cafa4e686ad0f38dc3df.1000x1000x1.jpg',
        id: 2970719,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 4240031,
        lyrics_state: 'complete',
        lyrics_updated_at: 1664736052,
        path: '/Imagine-dragons-believer-lyrics',
        pyongs_count: 428,
        relationships_index_url:
          'https://genius.com/Imagine-dragons-believer-sample',
        release_date_components: {
          year: 2017,
          month: 2,
          day: 1,
        },
        release_date_for_display: 'February 1, 2017',
        release_date_with_abbreviated_month_for_display: 'Feb. 1, 2017',
        song_art_image_thumbnail_url:
          'https://images.genius.com/79d328b4d5eb0f96b95b408b396978ac.300x300x1.jpg',
        song_art_image_url:
          'https://images.genius.com/79d328b4d5eb0f96b95b408b396978ac.1000x1000x1.jpg',
        stats: {
          unreviewed_annotations: 1,
          concurrents: 5,
          hot: false,
          pageviews: 6698537,
        },
        title: 'Believer',
        title_with_featured: 'Believer',
        updated_by_human_at: 1664736052,
        url: 'https://genius.com/Imagine-dragons-believer-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/29472',
          header_image_url:
            'https://images.genius.com/a881183df66627ef9994369a52f0834b.1000x375x1.jpg',
          id: 29472,
          image_url:
            'https://images.genius.com/ec1df125fd46ec3ef56f228df021a8cd.1000x1000x1.jpg',
          index_character: 'i',
          is_meme_verified: false,
          is_verified: false,
          name: 'Imagine Dragons',
          slug: 'Imagine-dragons',
          url: 'https://genius.com/artists/Imagine-dragons',
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 5,
        api_path: '/songs/3352793',
        artist_names: 'Lady Gaga & Bradley Cooper',
        full_title: 'Shallow by Lady Gaga & Bradley Cooper',
        header_image_thumbnail_url:
          'https://images.genius.com/c17c710661ee7612e5940ac04f4278dd.300x300x1.jpg',
        header_image_url:
          'https://images.genius.com/c17c710661ee7612e5940ac04f4278dd.1000x1000x1.jpg',
        id: 3352793,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 5589021,
        lyrics_state: 'complete',
        lyrics_updated_at: 1622497051,
        path: '/Lady-gaga-and-bradley-cooper-shallow-lyrics',
        pyongs_count: 362,
        relationships_index_url:
          'https://genius.com/Lady-gaga-and-bradley-cooper-shallow-sample',
        release_date_components: {
          year: 2018,
          month: 9,
          day: 27,
        },
        release_date_for_display: 'September 27, 2018',
        release_date_with_abbreviated_month_for_display: 'Sep. 27, 2018',
        song_art_image_thumbnail_url:
          'https://images.genius.com/f54559c1bf36b948f8a5d36f804fc840.300x300x1.jpg',
        song_art_image_url:
          'https://images.genius.com/f54559c1bf36b948f8a5d36f804fc840.1000x1000x1.jpg',
        stats: {
          unreviewed_annotations: 0,
          concurrents: 2,
          hot: false,
          pageviews: 6615628,
        },
        title: 'Shallow',
        title_with_featured: 'Shallow',
        updated_by_human_at: 1668512110,
        url: 'https://genius.com/Lady-gaga-and-bradley-cooper-shallow-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/1494027',
          header_image_url:
            'https://images.genius.com/24cdc034a4ef5cfcf8d4e89ca2b85e0e.1000x668x1.jpg',
          id: 1494027,
          image_url:
            'https://images.genius.com/8e80a7e43e4f528a6e834660392b4be6.675x675x1.jpg',
          index_character: 'l',
          is_meme_verified: false,
          is_verified: false,
          name: 'Lady Gaga & Bradley Cooper',
          slug: 'Lady-gaga-and-bradley-cooper',
          url: 'https://genius.com/artists/Lady-gaga-and-bradley-cooper',
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 36,
        api_path: '/songs/51899',
        artist_names: 'JAY-Z & Kanye West',
        full_title: 'Niggas in Paris by JAY-Z & Kanye West',
        header_image_thumbnail_url:
          'https://images.genius.com/23d4917f844406d16909875904331fe5.300x300x1.jpg',
        header_image_url:
          'https://images.genius.com/23d4917f844406d16909875904331fe5.1000x1000x1.jpg',
        id: 51899,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 3,
        lyrics_state: 'complete',
        lyrics_updated_at: 1669018520,
        path: '/Jay-z-and-kanye-west-niggas-in-paris-lyrics',
        pyongs_count: 448,
        relationships_index_url:
          'https://genius.com/Jay-z-and-kanye-west-niggas-in-paris-sample',
        release_date_components: {
          year: 2011,
          month: 9,
          day: 13,
        },
        release_date_for_display: 'September 13, 2011',
        release_date_with_abbreviated_month_for_display: 'Sep. 13, 2011',
        song_art_image_thumbnail_url:
          'https://images.genius.com/3d0e588d7acb15e690ba0f9e51e726ae.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/3d0e588d7acb15e690ba0f9e51e726ae.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 1,
          concurrents: 2,
          hot: false,
          pageviews: 6494549,
        },
        title: 'Niggas in Paris',
        title_with_featured: 'Niggas in Paris',
        updated_by_human_at: 1673208589,
        url: 'https://genius.com/Jay-z-and-kanye-west-niggas-in-paris-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/652275',
          header_image_url:
            'https://images.genius.com/25d42b3ac3c5a29206334c0a92063bb5.600x353x1.png',
          id: 652275,
          image_url:
            'https://images.genius.com/410b55abb1ff71c7ccc5be931a5c9a9d.788x788x1.jpg',
          index_character: 'j',
          is_meme_verified: false,
          is_verified: false,
          name: 'JAY-Z & Kanye West',
          slug: 'Jay-z-and-kanye-west',
          url: 'https://genius.com/artists/Jay-z-and-kanye-west',
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 9,
        api_path: '/songs/2953761',
        artist_names: 'Ed Sheeran',
        full_title: 'Perfect by Ed Sheeran',
        header_image_thumbnail_url:
          'https://images.genius.com/e3f8f8e64db64e0f9316365d8d247bf9.300x300x1.jpg',
        header_image_url:
          'https://images.genius.com/e3f8f8e64db64e0f9316365d8d247bf9.1000x1000x1.jpg',
        id: 2953761,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 2171344,
        lyrics_state: 'complete',
        lyrics_updated_at: 1669192582,
        path: '/Ed-sheeran-perfect-lyrics',
        pyongs_count: 260,
        relationships_index_url: 'https://genius.com/Ed-sheeran-perfect-sample',
        release_date_components: {
          year: 2017,
          month: 3,
          day: 3,
        },
        release_date_for_display: 'March 3, 2017',
        release_date_with_abbreviated_month_for_display: 'Mar. 3, 2017',
        song_art_image_thumbnail_url:
          'https://images.genius.com/35fad95b68ee49ae50eb71a918075e75.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/35fad95b68ee49ae50eb71a918075e75.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          concurrents: 5,
          hot: false,
          pageviews: 6431551,
        },
        title: 'Perfect',
        title_with_featured: 'Perfect',
        updated_by_human_at: 1671116810,
        url: 'https://genius.com/Ed-sheeran-perfect-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/12418',
          header_image_url:
            'https://images.genius.com/aba5e6ac5d3d7a71482698fd971312fd.1000x429x1.jpg',
          id: 12418,
          image_url:
            'https://images.genius.com/b501daeff73d1b17610f47a5668f690a.1000x1000x1.jpg',
          index_character: 'e',
          is_meme_verified: true,
          is_verified: true,
          name: 'Ed Sheeran',
          slug: 'Ed-sheeran',
          url: 'https://genius.com/artists/Ed-sheeran',
          iq: 1300,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 29,
        api_path: '/songs/177832',
        artist_names: 'JAY-Z (Ft. Justin Timberlake)',
        full_title: 'Holy Grail by JAY-Z (Ft. Justin Timberlake)',
        header_image_thumbnail_url:
          'https://images.genius.com/2da322648704159878b73c5cfc9c7dc5.300x300x1.png',
        header_image_url:
          'https://images.genius.com/2da322648704159878b73c5cfc9c7dc5.1000x1000x1.png',
        id: 177832,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 104344,
        lyrics_state: 'complete',
        lyrics_updated_at: 1653216241,
        path: '/Jay-z-holy-grail-lyrics',
        pyongs_count: 392,
        relationships_index_url: 'https://genius.com/Jay-z-holy-grail-sample',
        release_date_components: {
          year: 2013,
          month: 7,
          day: 4,
        },
        release_date_for_display: 'July 4, 2013',
        release_date_with_abbreviated_month_for_display: 'Jul. 4, 2013',
        song_art_image_thumbnail_url:
          'https://images.genius.com/2da322648704159878b73c5cfc9c7dc5.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/2da322648704159878b73c5cfc9c7dc5.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          concurrents: 2,
          hot: false,
          pageviews: 6380546,
        },
        title: 'Holy Grail',
        title_with_featured: 'Holy Grail (Ft. Justin Timberlake)',
        updated_by_human_at: 1669946754,
        url: 'https://genius.com/Jay-z-holy-grail-lyrics',
        featured_artists: [
          {
            _type: 'artist',
            api_path: '/artists/334',
            header_image_url:
              'https://images.genius.com/aa6dfaa347c15f7c3b5a4c768beb5465.1000x563x1.jpg',
            id: 334,
            image_url:
              'https://images.genius.com/d33775ee78f5b76308d1e024eb2c5867.1000x1000x1.jpg',
            index_character: 'j',
            is_meme_verified: false,
            is_verified: true,
            name: 'Justin Timberlake',
            slug: 'Justin-timberlake',
            url: 'https://genius.com/artists/Justin-timberlake',
            iq: 567,
          },
        ],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/2',
          header_image_url:
            'https://images.genius.com/57f67753a0fe8ce5ff4a2ab903fbe850.500x301x1.png',
          id: 2,
          image_url:
            'https://images.genius.com/dab4680bbb0569024ef3df3d1e87c277.570x570x1.jpg',
          index_character: 'j',
          is_meme_verified: true,
          is_verified: true,
          name: 'JAY-Z',
          slug: 'Jay-z',
          url: 'https://genius.com/artists/Jay-z',
          iq: 225,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 44,
        api_path: '/songs/5180439',
        artist_names: 'Eminem (Ft. Juice WRLD)',
        full_title: 'Godzilla by Eminem (Ft. Juice WRLD)',
        header_image_thumbnail_url:
          'https://images.genius.com/828acd1e1136e2e79248620d4ff2be4d.300x300x1.png',
        header_image_url:
          'https://images.genius.com/828acd1e1136e2e79248620d4ff2be4d.600x600x1.png',
        id: 5180439,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 8117646,
        lyrics_state: 'complete',
        lyrics_updated_at: 1669363345,
        path: '/Eminem-godzilla-lyrics',
        pyongs_count: 1243,
        relationships_index_url: 'https://genius.com/Eminem-godzilla-sample',
        release_date_components: {
          year: 2020,
          month: 1,
          day: 17,
        },
        release_date_for_display: 'January 17, 2020',
        release_date_with_abbreviated_month_for_display: 'Jan. 17, 2020',
        song_art_image_thumbnail_url:
          'https://images.genius.com/828acd1e1136e2e79248620d4ff2be4d.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/828acd1e1136e2e79248620d4ff2be4d.600x600x1.png',
        stats: {
          unreviewed_annotations: 3,
          concurrents: 3,
          hot: false,
          pageviews: 6376573,
        },
        title: 'Godzilla',
        title_with_featured: 'Godzilla (Ft. Juice WRLD)',
        updated_by_human_at: 1675814313,
        url: 'https://genius.com/Eminem-godzilla-lyrics',
        featured_artists: [
          {
            _type: 'artist',
            api_path: '/artists/1237094',
            header_image_url:
              'https://images.genius.com/87c55e8a5b91902ea6686d98b5b3bb3d.1000x563x1.png',
            id: 1237094,
            image_url:
              'https://images.genius.com/42b0e9b115b685c8dd7e7f32e3f1ce9c.999x999x1.jpg',
            index_character: 'j',
            is_meme_verified: false,
            is_verified: true,
            name: 'Juice WRLD',
            slug: 'Juice-wrld',
            url: 'https://genius.com/artists/Juice-wrld',
            iq: 15620,
          },
        ],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/45',
          header_image_url:
            'https://images.genius.com/7879bf220b8614a7fe4617006f132a92.1000x391x1.png',
          id: 45,
          image_url:
            'https://images.genius.com/76c536a17ca35f7edd1f78e129609fe0.573x573x1.jpg',
          index_character: 'e',
          is_meme_verified: true,
          is_verified: true,
          name: 'Eminem',
          slug: 'Eminem',
          url: 'https://genius.com/artists/Eminem',
          iq: 255644,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 28,
        api_path: '/songs/2263909',
        artist_names: "​gnash (Ft. Olivia O'Brien)",
        full_title: "​i​ hate u, i love u by ​gnash (Ft. Olivia O'Brien)",
        header_image_thumbnail_url:
          'https://images.genius.com/3577194e7015b076528d4c9dd0cb8115.300x300x1.jpg',
        header_image_url:
          'https://images.genius.com/3577194e7015b076528d4c9dd0cb8115.1000x1000x1.jpg',
        id: 2263909,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 1998921,
        lyrics_state: 'complete',
        lyrics_updated_at: 1637184069,
        path: '/Gnash-i-hate-u-i-love-u-lyrics',
        pyongs_count: 351,
        relationships_index_url:
          'https://genius.com/Gnash-i-hate-u-i-love-u-sample',
        release_date_components: {
          year: 2016,
          month: 2,
          day: 17,
        },
        release_date_for_display: 'February 17, 2016',
        release_date_with_abbreviated_month_for_display: 'Feb. 17, 2016',
        song_art_image_thumbnail_url:
          'https://images.genius.com/1a9037bc68df98aaa43721f802946c6e.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/1a9037bc68df98aaa43721f802946c6e.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          concurrents: 2,
          hot: false,
          pageviews: 6366806,
        },
        title: '​i​ hate u, i love u',
        title_with_featured: "​i​ hate u, i love u (Ft. Olivia O'Brien)",
        updated_by_human_at: 1652733547,
        url: 'https://genius.com/Gnash-i-hate-u-i-love-u-lyrics',
        featured_artists: [
          {
            _type: 'artist',
            api_path: '/artists/540192',
            header_image_url:
              'https://images.genius.com/afd77fc0fad69f25fa80cf642b1124e6.640x640x1.jpg',
            id: 540192,
            image_url:
              'https://images.genius.com/46ce63308d08e978352ed7970d76ebe1.478x478x1.jpg',
            index_character: 'o',
            is_meme_verified: false,
            is_verified: true,
            name: 'Olivia O’Brien',
            slug: 'Olivia-obrien',
            url: 'https://genius.com/artists/Olivia-obrien',
            iq: 3848,
          },
        ],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/48185',
          header_image_url:
            'https://images.genius.com/c5970cf8d80b1adf6e1d6d24bf53f3cc.660x660x1.jpg',
          id: 48185,
          image_url:
            'https://images.genius.com/e2b6a7c0df03f490d825b56a9a4e326e.640x640x1.jpg',
          index_character: 'g',
          is_meme_verified: false,
          is_verified: true,
          name: '​gnash',
          slug: 'Gnash',
          url: 'https://genius.com/artists/Gnash',
          iq: 11516,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 47,
        api_path: '/songs/81159',
        artist_names: 'Kendrick Lamar',
        full_title: 'Swimming Pools (Drank) by Kendrick Lamar',
        header_image_thumbnail_url:
          'https://images.genius.com/2f7273afbaf24d25f3957a4b95926fa9.300x169x1.jpg',
        header_image_url:
          'https://images.genius.com/2f7273afbaf24d25f3957a4b95926fa9.535x301x1.jpg',
        id: 81159,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 11524,
        lyrics_state: 'complete',
        lyrics_updated_at: 1670578414,
        path: '/Kendrick-lamar-swimming-pools-drank-lyrics',
        pyongs_count: 983,
        relationships_index_url:
          'https://genius.com/Kendrick-lamar-swimming-pools-drank-sample',
        release_date_components: {
          year: 2012,
          month: 7,
          day: 31,
        },
        release_date_for_display: 'July 31, 2012',
        release_date_with_abbreviated_month_for_display: 'Jul. 31, 2012',
        song_art_image_thumbnail_url:
          'https://images.genius.com/31be6d410838e0668609868bf0a78e5e.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/31be6d410838e0668609868bf0a78e5e.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 1,
          concurrents: 3,
          hot: false,
          pageviews: 6348749,
        },
        title: 'Swimming Pools (Drank)',
        title_with_featured: 'Swimming Pools (Drank)',
        updated_by_human_at: 1669672045,
        url: 'https://genius.com/Kendrick-lamar-swimming-pools-drank-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/1421',
          header_image_url:
            'https://images.genius.com/3514a6d32afe88c48f22263e303f55d0.1000x601x1.jpg',
          id: 1421,
          image_url:
            'https://images.genius.com/d6d96651b423fa5a83c38ee2a4c6c939.1000x1000x1.jpg',
          index_character: 'k',
          is_meme_verified: true,
          is_verified: true,
          name: 'Kendrick Lamar',
          slug: 'Kendrick-lamar',
          url: 'https://genius.com/artists/Kendrick-lamar',
          iq: 53911,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 27,
        api_path: '/songs/2989266',
        artist_names: 'Future',
        full_title: 'Mask Off by Future',
        header_image_thumbnail_url:
          'https://images.genius.com/3bafe3cb099c7ee3dc020dced7bc1068.300x300x1.jpg',
        header_image_url:
          'https://images.genius.com/3bafe3cb099c7ee3dc020dced7bc1068.1000x1000x1.jpg',
        id: 2989266,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 343483,
        lyrics_state: 'complete',
        lyrics_updated_at: 1673430175,
        path: '/Future-mask-off-lyrics',
        pyongs_count: 319,
        relationships_index_url: 'https://genius.com/Future-mask-off-sample',
        release_date_components: {
          year: 2017,
          month: 2,
          day: 17,
        },
        release_date_for_display: 'February 17, 2017',
        release_date_with_abbreviated_month_for_display: 'Feb. 17, 2017',
        song_art_image_thumbnail_url:
          'https://images.genius.com/130420153ed8ff63bab74dd483030456.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/130420153ed8ff63bab74dd483030456.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          hot: false,
          pageviews: 6335008,
        },
        title: 'Mask Off',
        title_with_featured: 'Mask Off',
        updated_by_human_at: 1673430176,
        url: 'https://genius.com/Future-mask-off-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/2197',
          header_image_url:
            'https://images.genius.com/5e622dbebaf2309119258925d49c1a18.875x583x1.webp',
          id: 2197,
          image_url:
            'https://images.genius.com/a3496b5fc4c6f7796e08548ab28aef18.1000x1000x1.jpg',
          index_character: 'f',
          is_meme_verified: false,
          is_verified: true,
          name: 'Future',
          slug: 'Future',
          url: 'https://genius.com/artists/Future',
          iq: 4632,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 31,
        api_path: '/songs/2419257',
        artist_names: 'Beyoncé',
        full_title: 'Formation by Beyoncé',
        header_image_thumbnail_url:
          'https://images.rapgenius.com/e6449d5502179104a51b9d104db91609.300x226x1.jpg',
        header_image_url:
          'https://images.rapgenius.com/e6449d5502179104a51b9d104db91609.1000x752x1.jpg',
        id: 2419257,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 672397,
        lyrics_state: 'complete',
        lyrics_updated_at: 1660180888,
        path: '/Beyonce-formation-lyrics',
        pyongs_count: 234,
        relationships_index_url: 'https://genius.com/Beyonce-formation-sample',
        release_date_components: {
          year: 2016,
          month: 2,
          day: 6,
        },
        release_date_for_display: 'February 6, 2016',
        release_date_with_abbreviated_month_for_display: 'Feb. 6, 2016',
        song_art_image_thumbnail_url:
          'https://images.genius.com/4a477a266a1de166f4e1e3ac714f474c.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/4a477a266a1de166f4e1e3ac714f474c.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          hot: false,
          pageviews: 6127306,
        },
        title: 'Formation',
        title_with_featured: 'Formation',
        updated_by_human_at: 1669898010,
        url: 'https://genius.com/Beyonce-formation-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/498',
          header_image_url:
            'https://images.genius.com/2325d4756b13cb29d0eca6e90be3248a.1000x667x1.jpg',
          id: 498,
          image_url:
            'https://images.genius.com/5d016c50d8d877e09687a782bcfaa390.840x840x1.jpg',
          index_character: 'b',
          is_meme_verified: false,
          is_verified: false,
          name: 'Beyoncé',
          slug: 'Beyonce',
          url: 'https://genius.com/artists/Beyonce',
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 18,
        api_path: '/songs/2441478',
        artist_names: 'XXXTENTACION',
        full_title: 'Look At Me! by XXXTENTACION',
        header_image_thumbnail_url:
          'https://images.genius.com/bbd3f056dd044b716af82ad6e997ec2a.300x300x1.jpg',
        header_image_url:
          'https://images.genius.com/bbd3f056dd044b716af82ad6e997ec2a.640x640x1.jpg',
        id: 2441478,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 1077840,
        lyrics_state: 'complete',
        lyrics_updated_at: 1670424473,
        path: '/Xxxtentacion-look-at-me-lyrics',
        pyongs_count: 665,
        relationships_index_url:
          'https://genius.com/Xxxtentacion-look-at-me-sample',
        release_date_components: {
          year: 2015,
          month: 12,
          day: 30,
        },
        release_date_for_display: 'December 30, 2015',
        release_date_with_abbreviated_month_for_display: 'Dec. 30, 2015',
        song_art_image_thumbnail_url:
          'https://images.genius.com/edc42e8b57c88eca5ef5a07171cb4ca3.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/edc42e8b57c88eca5ef5a07171cb4ca3.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          hot: false,
          pageviews: 6108967,
        },
        title: 'Look At Me!',
        title_with_featured: 'Look At Me!',
        updated_by_human_at: 1670424473,
        url: 'https://genius.com/Xxxtentacion-look-at-me-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/396565',
          header_image_url:
            'https://images.genius.com/83281176c66e39feea1b35f435388edb.1000x333x1.jpg',
          id: 396565,
          image_url:
            'https://images.genius.com/7337afb84752ce941b08f860be07a13d.548x548x1.jpg',
          index_character: 'x',
          is_meme_verified: false,
          is_verified: true,
          name: 'XXXTENTACION',
          slug: 'Xxxtentacion',
          url: 'https://genius.com/artists/Xxxtentacion',
          iq: 364,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 38,
        api_path: '/songs/3035222',
        artist_names: 'Kendrick Lamar',
        full_title: 'DNA. by Kendrick Lamar',
        header_image_thumbnail_url:
          'https://images.genius.com/b4ab894b40a60cd23f1330e2c6e34e17.300x169x1.jpg',
        header_image_url:
          'https://images.genius.com/b4ab894b40a60cd23f1330e2c6e34e17.1000x562x1.jpg',
        id: 3035222,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 104344,
        lyrics_state: 'complete',
        lyrics_updated_at: 1672673786,
        path: '/Kendrick-lamar-dna-lyrics',
        pyongs_count: 689,
        relationships_index_url: 'https://genius.com/Kendrick-lamar-dna-sample',
        release_date_components: {
          year: 2017,
          month: 4,
          day: 14,
        },
        release_date_for_display: 'April 14, 2017',
        release_date_with_abbreviated_month_for_display: 'Apr. 14, 2017',
        song_art_image_thumbnail_url:
          'https://images.genius.com/66e5fceba3208f82a426c04e791b62cf.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/66e5fceba3208f82a426c04e791b62cf.600x600x1.png',
        stats: {
          unreviewed_annotations: 0,
          hot: false,
          pageviews: 6099929,
        },
        title: 'DNA.',
        title_with_featured: 'DNA.',
        updated_by_human_at: 1672673786,
        url: 'https://genius.com/Kendrick-lamar-dna-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/1421',
          header_image_url:
            'https://images.genius.com/3514a6d32afe88c48f22263e303f55d0.1000x601x1.jpg',
          id: 1421,
          image_url:
            'https://images.genius.com/d6d96651b423fa5a83c38ee2a4c6c939.1000x1000x1.jpg',
          index_character: 'k',
          is_meme_verified: true,
          is_verified: true,
          name: 'Kendrick Lamar',
          slug: 'Kendrick-lamar',
          url: 'https://genius.com/artists/Kendrick-lamar',
          iq: 53911,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 11,
        api_path: '/songs/2450584',
        artist_names: 'Drake (Ft. Kyla & Wizkid)',
        full_title: 'One Dance by Drake (Ft. Kyla & Wizkid)',
        header_image_thumbnail_url:
          'https://images.rapgenius.com/c16287e16fcdaf2b2d9bec0b5634641f.300x300x1.jpg',
        header_image_url:
          'https://images.rapgenius.com/c16287e16fcdaf2b2d9bec0b5634641f.600x600x1.jpg',
        id: 2450584,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 104344,
        lyrics_state: 'complete',
        lyrics_updated_at: 1670003540,
        path: '/Drake-one-dance-lyrics',
        pyongs_count: 233,
        relationships_index_url: 'https://genius.com/Drake-one-dance-sample',
        release_date_components: {
          year: 2016,
          month: 4,
          day: 5,
        },
        release_date_for_display: 'April 5, 2016',
        release_date_with_abbreviated_month_for_display: 'Apr. 5, 2016',
        song_art_image_thumbnail_url:
          'https://images.genius.com/b94353bfd9c57fd0cf88677ffb777193.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/b94353bfd9c57fd0cf88677ffb777193.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          hot: false,
          pageviews: 6059971,
        },
        title: 'One Dance',
        title_with_featured: 'One Dance (Ft. Kyla & Wizkid)',
        updated_by_human_at: 1671976664,
        url: 'https://genius.com/Drake-one-dance-lyrics',
        featured_artists: [
          {
            _type: 'artist',
            api_path: '/artists/155256',
            header_image_url:
              'https://images.genius.com/e4a7eaec04fa7672ba6b2955d799c547.480x360x1.jpg',
            id: 155256,
            image_url:
              'https://images.genius.com/60e4f8e11ced51f98a82a47c34c48880.300x300x1.png',
            index_character: 'k',
            is_meme_verified: false,
            is_verified: false,
            name: 'Kyla',
            slug: 'Kyla',
            url: 'https://genius.com/artists/Kyla',
          },
          {
            _type: 'artist',
            api_path: '/artists/20148',
            header_image_url:
              'https://images.genius.com/8d15c2b3c6c482cead54f6d8a276c71e.736x736x1.jpg',
            id: 20148,
            image_url:
              'https://images.genius.com/60eac34fd51582075193bd661c088a7d.605x605x1.jpg',
            index_character: 'w',
            is_meme_verified: false,
            is_verified: false,
            name: 'Wizkid',
            slug: 'Wizkid',
            url: 'https://genius.com/artists/Wizkid',
          },
        ],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/130',
          header_image_url:
            'https://images.genius.com/660da2a2d6c98034963ce733c8d9d816.308x164x1.jpg',
          id: 130,
          image_url:
            'https://images.genius.com/26104e61a238b70abfbad57be3de4359.1000x1000x1.jpg',
          index_character: 'd',
          is_meme_verified: false,
          is_verified: false,
          name: 'Drake',
          slug: 'Drake',
          url: 'https://genius.com/artists/Drake',
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 41,
        api_path: '/songs/2400811',
        artist_names: 'Desiigner',
        full_title: 'Panda by Desiigner',
        header_image_thumbnail_url:
          'https://images.genius.com/688834676336558c40459fd774278fe8.300x300x1.png',
        header_image_url:
          'https://images.genius.com/688834676336558c40459fd774278fe8.1000x1000x1.png',
        id: 2400811,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 2680766,
        lyrics_state: 'complete',
        lyrics_updated_at: 1637090774,
        path: '/Desiigner-panda-lyrics',
        pyongs_count: 383,
        relationships_index_url: 'https://genius.com/Desiigner-panda-sample',
        release_date_components: {
          year: 2015,
          month: 12,
          day: 15,
        },
        release_date_for_display: 'December 15, 2015',
        release_date_with_abbreviated_month_for_display: 'Dec. 15, 2015',
        song_art_image_thumbnail_url:
          'https://images.genius.com/d08dc36334f44d1ea46f9e5287ff7547.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/d08dc36334f44d1ea46f9e5287ff7547.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          hot: false,
          pageviews: 5995723,
        },
        title: 'Panda',
        title_with_featured: 'Panda',
        updated_by_human_at: 1671153299,
        url: 'https://genius.com/Desiigner-panda-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/626678',
          header_image_url:
            'https://images.genius.com/50dcf614c1d77b83e45f64b536f37f12.800x1000x1.jpg',
          id: 626678,
          image_url:
            'https://images.genius.com/d15bae98c3c26b5bfc0f018faa1bca70.1000x1000x1.jpg',
          index_character: 'd',
          is_meme_verified: false,
          is_verified: true,
          name: 'Desiigner',
          slug: 'Desiigner',
          url: 'https://genius.com/artists/Desiigner',
          iq: 15732,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 50,
        api_path: '/songs/90475',
        artist_names: 'Kendrick Lamar (Ft. Jay Rock)',
        full_title: 'Money Trees by Kendrick Lamar (Ft. Jay Rock)',
        header_image_thumbnail_url:
          'https://images.genius.com/c129d5d114d2cd2303d72e073746a5db.300x300x1.jpg',
        header_image_url:
          'https://images.genius.com/c129d5d114d2cd2303d72e073746a5db.1000x1000x1.jpg',
        id: 90475,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 1328,
        lyrics_state: 'complete',
        lyrics_updated_at: 1675198428,
        path: '/Kendrick-lamar-money-trees-lyrics',
        pyongs_count: 989,
        relationships_index_url:
          'https://genius.com/Kendrick-lamar-money-trees-sample',
        release_date_components: {
          year: 2012,
          month: 10,
          day: 22,
        },
        release_date_for_display: 'October 22, 2012',
        release_date_with_abbreviated_month_for_display: 'Oct. 22, 2012',
        song_art_image_thumbnail_url:
          'https://images.genius.com/c129d5d114d2cd2303d72e073746a5db.300x300x1.jpg',
        song_art_image_url:
          'https://images.genius.com/c129d5d114d2cd2303d72e073746a5db.1000x1000x1.jpg',
        stats: {
          unreviewed_annotations: 2,
          concurrents: 3,
          hot: false,
          pageviews: 5860320,
        },
        title: 'Money Trees',
        title_with_featured: 'Money Trees (Ft. Jay Rock)',
        updated_by_human_at: 1675198429,
        url: 'https://genius.com/Kendrick-lamar-money-trees-lyrics',
        featured_artists: [
          {
            _type: 'artist',
            api_path: '/artists/1403',
            header_image_url:
              'https://images.genius.com/342a36ab4005da9cfd3b0292f7a748a1.1000x600x1.jpg',
            id: 1403,
            image_url:
              'https://images.genius.com/e1cbef603f6c11cee182adcd55a78a87.421x421x1.jpg',
            index_character: 'j',
            is_meme_verified: false,
            is_verified: true,
            name: 'Jay Rock',
            slug: 'Jay-rock',
            url: 'https://genius.com/artists/Jay-rock',
            iq: 14048,
          },
        ],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/1421',
          header_image_url:
            'https://images.genius.com/3514a6d32afe88c48f22263e303f55d0.1000x601x1.jpg',
          id: 1421,
          image_url:
            'https://images.genius.com/d6d96651b423fa5a83c38ee2a4c6c939.1000x1000x1.jpg',
          index_character: 'k',
          is_meme_verified: true,
          is_verified: true,
          name: 'Kendrick Lamar',
          slug: 'Kendrick-lamar',
          url: 'https://genius.com/artists/Kendrick-lamar',
          iq: 53911,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 34,
        api_path: '/songs/599427',
        artist_names: 'J. Cole',
        full_title: 'No Role Modelz by J. Cole',
        header_image_thumbnail_url:
          'https://images.genius.com/3b02f41397586e2b3c8bd3fbbc586928.300x300x1.png',
        header_image_url:
          'https://images.genius.com/3b02f41397586e2b3c8bd3fbbc586928.1000x1000x1.png',
        id: 599427,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 599242,
        lyrics_state: 'complete',
        lyrics_updated_at: 1656080782,
        path: '/J-cole-no-role-modelz-lyrics',
        pyongs_count: 1283,
        relationships_index_url:
          'https://genius.com/J-cole-no-role-modelz-sample',
        release_date_components: {
          year: 2014,
          month: 12,
          day: 9,
        },
        release_date_for_display: 'December 9, 2014',
        release_date_with_abbreviated_month_for_display: 'Dec. 9, 2014',
        song_art_image_thumbnail_url:
          'https://images.genius.com/3b02f41397586e2b3c8bd3fbbc586928.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/3b02f41397586e2b3c8bd3fbbc586928.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 0,
          concurrents: 2,
          hot: false,
          pageviews: 5638241,
        },
        title: 'No Role Modelz',
        title_with_featured: 'No Role Modelz',
        updated_by_human_at: 1671210566,
        url: 'https://genius.com/J-cole-no-role-modelz-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/69',
          header_image_url:
            'https://images.genius.com/b4ced5fc34166c4798ae3a0e23aaa13d.1000x261x1.jpg',
          id: 69,
          image_url:
            'https://images.genius.com/84a98a8d26b13b7311aa2359ebade757.1000x1000x1.jpg',
          index_character: 'j',
          is_meme_verified: false,
          is_verified: true,
          name: 'J. Cole',
          slug: 'J-cole',
          url: 'https://genius.com/artists/J-cole',
          iq: 505,
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 47,
        api_path: '/songs/2314493',
        artist_names:
          'Leslie Odom, Jr., Anthony Ramos, Daveed Diggs, Okieriete Onaodowan, Lin-Manuel Miranda, Phillipa Soo, Christopher Jackson & Original Broadway Cast of "Hamilton"',
        full_title:
          'Alexander Hamilton by Leslie Odom, Jr., Anthony Ramos, Daveed Diggs, Okieriete Onaodowan, Lin-Manuel Miranda, Phillipa Soo, Christopher Jackson & Original Broadway Cast of "Hamilton"',
        header_image_thumbnail_url:
          'https://images.genius.com/d272cabd53c271f61829b136372166e6.300x116x1.jpg',
        header_image_url:
          'https://images.genius.com/d272cabd53c271f61829b136372166e6.1000x386x1.jpg',
        id: 2314493,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 2254910,
        lyrics_state: 'complete',
        lyrics_updated_at: 1648675408,
        path: '/Leslie-odom-jr-anthony-ramos-daveed-diggs-okieriete-onaodowan-lin-manuel-miranda-phillipa-soo-christopher-jackson-and-original-broadway-cast-of-hamilton-alexander-hamilton-lyrics',
        pyongs_count: 211,
        relationships_index_url:
          'https://genius.com/Leslie-odom-jr-anthony-ramos-daveed-diggs-okieriete-onaodowan-lin-manuel-miranda-phillipa-soo-christopher-jackson-and-original-broadway-cast-of-hamilton-alexander-hamilton-sample',
        release_date_components: {
          year: 2015,
          month: 9,
          day: 25,
        },
        release_date_for_display: 'September 25, 2015',
        release_date_with_abbreviated_month_for_display: 'Sep. 25, 2015',
        song_art_image_thumbnail_url:
          'https://images.genius.com/3d49fcb34aa21fccd06f2b3c818146fd.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/3d49fcb34aa21fccd06f2b3c818146fd.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 1,
          concurrents: 2,
          hot: false,
          pageviews: 5634551,
        },
        title: 'Alexander Hamilton',
        title_with_featured: 'Alexander Hamilton',
        updated_by_human_at: 1668252523,
        url: 'https://genius.com/Leslie-odom-jr-anthony-ramos-daveed-diggs-okieriete-onaodowan-lin-manuel-miranda-phillipa-soo-christopher-jackson-and-original-broadway-cast-of-hamilton-alexander-hamilton-lyrics',
        featured_artists: [],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/2316446',
          header_image_url:
            'https://images.genius.com/d0d69a90bf62159c12f3be35bdfe9238.714x1000x1.jpg',
          id: 2316446,
          image_url:
            'https://images.genius.com/0cfb72459477cf06b80d2d28fcf0b22f.1000x1000x1.jpg',
          index_character: 'l',
          is_meme_verified: false,
          is_verified: false,
          name: 'Leslie Odom, Jr., Anthony Ramos, Daveed Diggs, Okieriete Onaodowan, Lin-Manuel Miranda, Phillipa Soo, Christopher Jackson & Original Broadway Cast of “Hamilton”',
          slug: 'Leslie-odom-jr-anthony-ramos-daveed-diggs-okieriete-onaodowan-lin-manuel-miranda-phillipa-soo-christopher-jackson-and-original-broadway-cast-of-hamilton',
          url: 'https://genius.com/artists/Leslie-odom-jr-anthony-ramos-daveed-diggs-okieriete-onaodowan-lin-manuel-miranda-phillipa-soo-christopher-jackson-and-original-broadway-cast-of-hamilton',
        },
      },
    },
    {
      _type: 'chart_item',
      type: 'song',
      item: {
        _type: 'song',
        annotation_count: 26,
        api_path: '/songs/4445394',
        artist_names: 'Lil Nas X (Ft. Billy Ray Cyrus)',
        full_title: 'Old Town Road (Remix) by Lil Nas X (Ft. Billy Ray Cyrus)',
        header_image_thumbnail_url:
          'https://images.genius.com/f33344dfcdbd3669f1ffa3a675faeaf2.300x300x1.png',
        header_image_url:
          'https://images.genius.com/f33344dfcdbd3669f1ffa3a675faeaf2.1000x1000x1.png',
        id: 4445394,
        instrumental: false,
        language: 'en',
        lyrics_owner_id: 104344,
        lyrics_state: 'complete',
        lyrics_updated_at: 1666364103,
        path: '/Lil-nas-x-old-town-road-remix-lyrics',
        pyongs_count: 340,
        relationships_index_url:
          'https://genius.com/Lil-nas-x-old-town-road-remix-sample',
        release_date_components: {
          year: 2019,
          month: 4,
          day: 5,
        },
        release_date_for_display: 'April 5, 2019',
        release_date_with_abbreviated_month_for_display: 'Apr. 5, 2019',
        song_art_image_thumbnail_url:
          'https://images.genius.com/f33344dfcdbd3669f1ffa3a675faeaf2.300x300x1.png',
        song_art_image_url:
          'https://images.genius.com/f33344dfcdbd3669f1ffa3a675faeaf2.1000x1000x1.png',
        stats: {
          unreviewed_annotations: 1,
          hot: false,
          pageviews: 5546274,
        },
        title: 'Old Town Road (Remix)',
        title_with_featured: 'Old Town Road (Remix) (Ft. Billy Ray Cyrus)',
        updated_by_human_at: 1672922298,
        url: 'https://genius.com/Lil-nas-x-old-town-road-remix-lyrics',
        featured_artists: [
          {
            _type: 'artist',
            api_path: '/artists/60166',
            header_image_url:
              'https://images.genius.com/7c42e3b16da0528b1d4b4a81527d8475.1000x1000x1.jpg',
            id: 60166,
            image_url:
              'https://images.genius.com/67707505061c84bc591bbe90df2c9757.640x640x1.jpg',
            index_character: 'b',
            is_meme_verified: false,
            is_verified: false,
            name: 'Billy Ray Cyrus',
            slug: 'Billy-ray-cyrus',
            url: 'https://genius.com/artists/Billy-ray-cyrus',
          },
        ],
        primary_artist: {
          _type: 'artist',
          api_path: '/artists/1770892',
          header_image_url:
            'https://images.genius.com/818fe9695ac76cd55d9e978dd3df7bdf.770x770x1.jpg',
          id: 1770892,
          image_url:
            'https://images.genius.com/708220a6e1637b6817fda5d79e809429.770x770x1.jpg',
          index_character: 'l',
          is_meme_verified: false,
          is_verified: true,
          name: 'Lil Nas X',
          slug: 'Lil-nas-x',
          url: 'https://genius.com/artists/Lil-nas-x',
          iq: 9524,
        },
      },
    },
  ],
  next_page: 2,
};
