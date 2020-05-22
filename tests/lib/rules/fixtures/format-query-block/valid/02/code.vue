<page-query>
  fragment RankingParts on TourRanking {
    id
    rankings: data {
      rank
      nickname
      score
      badge: pin_badge_image_url
      ranking_started_at
      ranking_finished_at
    }
  }

  query($id: ID, $prevId: ID, $nextId: ID) {
    ranking: tourRanking(id: $id) {
      ...RankingParts
    }

    next: tourRanking(id: $prevId) {
      ...RankingParts
    }

    prev: tourRanking(id: $nextId) {
      ...RankingParts
    }
  }
</page-query>