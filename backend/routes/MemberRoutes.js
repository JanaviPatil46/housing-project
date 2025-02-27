const express = require('express');
const {
    createMember,
    getAllMembers,
    getMemberById,
    updateMember,
    deleteMember,
} = require('../controllers/MemberController');

const router = express.Router();

router.post('/', createMember);
router.get('/', getAllMembers);
router.get('/:id', getMemberById);
router.patch('/:id', updateMember);
router.delete('/:id', deleteMember);

module.exports = router;



