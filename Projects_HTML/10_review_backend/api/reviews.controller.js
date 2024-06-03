// __REVIEW_CONTROLLER_JS__
// __Francisco_Jimenez_Garcia_2024__

import ReviewsDAO from "../dao/reviews_dao.js"

export default class ReviewController {
  static async apiPostReview(req, res, next) {
    try {
      const kMovieId = req.body.movieId;
      const kMovieUser = req.body.user;
      const kMovieReview = req.body.review;
      
      const kMovieResponse = await ReviewsDAO.addReview(
        movieId,
        user,
        review
      );

      res.json({ status: "success"});
    } catch (e) {
      res.status(500).json({error: e.message});
    }
  }
  
  static async apiGetReview(req, res, next) {
    try {
      let id = req.params.id || {};
      let review = await ReviewsDAO.getReview(id);
      
      if(!review) {
        res.status(404).json({error: "Not found"});
        return
      }

      res.json(review);
    } catch (e) {
      console.log(`api, ${e}`);
      res.status(500).json({error: e});
    }
  }

  static async apiUpdateReview(req, res, next) {
    try {
      const kReviewId = req.params.id;
      const kReview = req.body.review;
      const kUser = req.body.user;

      const kReviewResponse = await ReviewsDAO.updateReview(
        reviewId,
        user,
        review
      );

      var {error} = kReviewResponse;
      if (error) {
        res.status.json({error});
      }

      if (kReviewResponse.modifiedCount == 0) {
        throw new Error(
          "unable to update review",
        );
      }

      res.json({status: "success"});
    } catch (e) {
      res.status(500).json({ error: e.message});
    }
  }

  static async apiDeleteReview(req, res, next) {
    try {
      const kReviewId = req.params.id;
      const kReviewResponse = await ReviewsDAO.deleteReview(kReviewId);

      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  }

  static async apiGetReviews(req, res, next)  {
    try {
      let id = req.params.id || {};
      let reviews = await ReviewsDAO.getReviewsByMovieId(id);

      if(!reviews) {
        res.status(404).json({ error: "Not found" });
        return
      }

      res.json(reviews);
    } catch (e) {
      console.log(`api, ${e}`);
      res.status(500).json({ error: e });
    }
  }
}