
import { Unit, Lesson } from '@/data/units';

/**
 * Determines the next unit/lesson to practice based on completion history.
 * 
 * @param completedLessons - Array of lesson IDs that have been completed.
 * @param lastPracticedLessonId - The ID of the last lesson practiced.
 * @param allUnits - The full list of units available in the curriculum.
 * @returns The ID of the recommended lesson to practice.
 */
export function getSmartPracticeUnit(
    completedLessons: string[], 
    lastPracticedLessonId: string | null, 
    allUnits: Unit[]
): string {
    // 1. If there's a last practiced lesson and it's NOT completed, resume it.
    if (lastPracticedLessonId && !completedLessons.includes(lastPracticedLessonId)) {
        return lastPracticedLessonId;
    }

    // 2. Iterate through all units and lessons to find the first incomplete one.
    for (const unit of allUnits) {
        for (const lesson of unit.lessons) {
            if (!completedLessons.includes(lesson.id)) {
                return lesson.id;
            }
        }
    }

    // 3. If all lessons are completed, restart from the very first one (or handle differently)
    if (allUnits.length > 0 && allUnits[0].lessons.length > 0) {
        return allUnits[0].lessons[0].id;
    }

    // Fallback (should normally not happen if data exists)
    return "unit-1-lesson-1";
}
